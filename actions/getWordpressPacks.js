"use server";

const GRAPHQL_BASE_URL = process.env.NEXT_PUBLIC_WP_GRAPHQL; // ex: https://site.com/graphql
const REST_BASE_URL = process.env.NEXT_PUBLIC_WP_REST; // ex: https://site.com/wp-json/wp/v2
const REVALIDATE_TIME = Number(process.env.REVALIDATE_TIME) || 300;

/**
 * Récupère la liste de tous les packs WordPress
 * @param {Object} options
 * @param {number} [options.first=100] - Nombre de packs à récupérer
 * @param {string} [options.orderBy='DATE'] - Ordre de tri (DATE, TITLE, etc.)
 * @param {string} [options.order='DESC'] - Direction du tri (ASC, DESC)
 */
export async function getWordpressPacks({
   first = 100,
   orderBy = "DATE",
   order = "DESC",
} = {}) {
   if (!GRAPHQL_BASE_URL) {
      throw new Error(
         "La variable d'environnement NEXT_PUBLIC_WP_GRAPHQL n'est pas définie"
      );
   }

   if (!REST_BASE_URL) {
      throw new Error(
         "La variable d'environnement NEXT_PUBLIC_WP_REST n'est pas définie"
      );
   }

   // 1️⃣ GraphQL pour récupérer la liste des packs avec titre et slug
   const graphqlQuery = `
    query GetPacks($first: Int!, $orderBy: PostObjectsConnectionOrderbyEnum!, $order: OrderEnum!) {
      packs(first: $first, where: { orderby: { field: $orderBy, order: $order } }) {
        nodes {
          id
          databaseId
          title
          slug
        }
      }
    }
  `;

   const graphqlRes = await fetch(GRAPHQL_BASE_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
         query: graphqlQuery,
         variables: { first, orderBy, order },
      }),
      next: { revalidate: REVALIDATE_TIME },
   });

   if (!graphqlRes.ok) throw new Error("Erreur lors de la requête GraphQL");

   const { data: graphqlData } = await graphqlRes.json();
   const packs = graphqlData.packs?.nodes || [];

   // 2️⃣ REST pour récupérer les champs ACF de chaque pack
   const packsWithACF = await Promise.all(
      packs.map(async (pack) => {
         try {
            const restRes = await fetch(
               `${REST_BASE_URL}/pack/${pack.databaseId}`,
               {
                  next: { revalidate: REVALIDATE_TIME },
               }
            );

            if (!restRes.ok) {
               console.warn(
                  `Impossible de récupérer les champs ACF pour le pack ${pack.databaseId}`
               );
               return {
                  ...pack,
                  acf: {},
                  order: null,
               };
            }

            const restData = await restRes.json();
            const acfFields = restData.acf || {};

            return {
               id: pack.databaseId,
               title: pack.title,
               slug: pack.slug,
               // Fusionne tous les champs ACF directement dans l'objet retourné
               ...acfFields,
               // Garde aussi une référence à tous les champs ACF dans 'acf' pour référence
               acf: acfFields,
            };
         } catch (error) {
            console.error(
               `Erreur lors de la récupération des champs ACF pour le pack ${pack.databaseId}:`,
               error
            );
            return {
               ...pack,
               acf: {},
               order: null,
            };
         }
      })
   );

   // 3️⃣ Trie les packs par le champ 'order' (string converti en nombre) si présent
   const sortedPacks = packsWithACF.sort((a, b) => {
      // Si un pack n'a pas d'order, on le met à la fin
      if (!a.order && !b.order) return 0;
      if (!a.order) return 1;
      if (!b.order) return -1;

      // Convertit le string en nombre pour le tri
      const orderA = Number.parseInt(a.order, 10) || 0;
      const orderB = Number.parseInt(b.order, 10) || 0;

      return orderA - orderB;
   });

   return sortedPacks;
}
