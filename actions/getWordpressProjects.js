"use server";

const GRAPHQL_BASE_URL = process.env.NEXT_PUBLIC_WP_GRAPHQL; // ex: https://site.com/graphql
const REST_BASE_URL = process.env.NEXT_PUBLIC_WP_REST; // ex: https://site.com/wp-json/wp/v2
const REVALIDATE_TIME = Number(process.env.REVALIDATE_TIME) || 300;

/**
 * Récupère un projet WordPress unique avec GraphQL pour les champs de base et REST pour les champs ACF
 * @param {Object} options
 * @param {string|number} options.id - ID du projet
 * @param {'DATABASE_ID'|'SLUG'|'URI'} [options.idType='DATABASE_ID'] - Type d'identifiant
 */
export async function getWordpressProject({ id, idType = "DATABASE_ID" }) {
   if (!id) throw new Error("L'ID est requis");

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

   // 1️⃣ GraphQL pour récupérer les champs de base (title, content, slug, featuredImage)
   const graphqlQuery = `
    query GetProject($id: ID!, $idType: ProjectIdType!) {
      project(id: $id, idType: $idType) {
        title
        content(format: RENDERED)
        slug
        featuredImage {
          node {
            link
            mediaDetails {
              height
              width
            }
          }
        }
        seo: seo {
          title
          metaDesc
          metaRobotsNoindex
        }
      }
    }
  `;

   const graphqlRes = await fetch(GRAPHQL_BASE_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
         query: graphqlQuery,
         variables: { id, idType },
      }),
      next: { revalidate: REVALIDATE_TIME },
   });

   if (!graphqlRes.ok) throw new Error("Erreur lors de la requête GraphQL");

   const { data: graphqlData } = await graphqlRes.json();
   const graphQLProject = graphqlData.project;

   if (!graphQLProject) {
      throw new Error(`Projet avec l'ID ${id} non trouvé`);
   }

   // 2️⃣ REST pour récupérer tous les champs ACF
   // On utilise l'ID de la base de données pour REST
   let restId = id;
   if (idType !== "DATABASE_ID") {
      // Si on a passé un slug ou autre, on doit d'abord récupérer l'ID depuis GraphQL
      // Pour l'instant, on assume que l'ID est déjà un DATABASE_ID
      // Si besoin, on peut ajouter une requête supplémentaire pour convertir
   }

   const restRes = await fetch(`${REST_BASE_URL}/project/${restId}`, {
      next: { revalidate: REVALIDATE_TIME },
   });

   if (!restRes.ok) {
      throw new Error(
         `Erreur lors de la récupération des champs ACF via REST (${restRes.status})`
      );
   }

   const restData = await restRes.json();
   const acfFields = restData.acf || {};

   // 3️⃣ Retourne un objet combiné : GraphQL pour les champs de base + REST pour les champs ACF
   return {
      id: restData.id,
      title: graphQLProject.title,
      content: graphQLProject.content,
      slug: graphQLProject.slug,
      featuredImage: graphQLProject.featuredImage?.node
         ? {
              link: graphQLProject.featuredImage.node.link,
              width: graphQLProject.featuredImage.node.mediaDetails?.width,
              height: graphQLProject.featuredImage.node.mediaDetails?.height,
           }
         : null,
      seo: graphQLProject.seo,
      // Fusionne tous les champs ACF directement dans l'objet retourné
      ...acfFields,
      // Garde aussi une référence à tous les champs ACF dans 'acf' pour référence
      acf: acfFields,
   };
}

/**
 * Récupère la liste de tous les projets WordPress
 * @param {Object} options
 * @param {number} [options.first=100] - Nombre de projets à récupérer
 * @param {string} [options.orderBy='DATE'] - Ordre de tri (DATE, TITLE, etc.)
 * @param {string} [options.order='DESC'] - Direction du tri (ASC, DESC)
 */
export async function getWordpressProjects({
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

   // 1️⃣ GraphQL pour récupérer la liste des projets avec les champs de base
   const graphqlQuery = `
    query GetProjects($first: Int!, $orderBy: PostObjectsConnectionOrderbyEnum!, $order: OrderEnum!) {
      projects(first: $first, where: { orderby: { field: $orderBy, order: $order } }) {
        nodes {
          id
          databaseId
          title
          content(format: RENDERED)
          slug
          featuredImage {
            node {
              link
              mediaDetails {
                height
                width
              }
            }
          }
          seo: seo {
            title
            metaDesc
            metaRobotsNoindex
          }
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
   const projects = graphqlData.projects?.nodes || [];

   // 2️⃣ REST pour récupérer les champs ACF de chaque projet
   const projectsWithACF = await Promise.all(
      projects.map(async (project) => {
         try {
            const restRes = await fetch(
               `${REST_BASE_URL}/project/${project.databaseId}`,
               {
                  next: { revalidate: REVALIDATE_TIME },
               }
            );

            if (!restRes.ok) {
               console.warn(
                  `Impossible de récupérer les champs ACF pour le projet ${project.databaseId}`
               );
               return {
                  ...project,
                  acf: {},
                  order: null,
               };
            }

            const restData = await restRes.json();
            const acfFields = restData.acf || {};

            return {
               id: project.databaseId,
               title: project.title,
               content: project.content,
               slug: project.slug,
               featuredImage: project.featuredImage?.node
                  ? {
                       link: project.featuredImage.node.link,
                       width: project.featuredImage.node.mediaDetails?.width,
                       height: project.featuredImage.node.mediaDetails?.height,
                    }
                  : null,
               seo: project.seo,
               // Fusionne tous les champs ACF directement dans l'objet retourné
               ...acfFields,
               // Garde aussi une référence à tous les champs ACF dans 'acf' pour référence
               // acf: acfFields,
            };
         } catch (error) {
            console.error(
               `Erreur lors de la récupération des champs ACF pour le projet ${project.databaseId}:`,
               error
            );
            return {
               ...project,
               acf: {},
               order: null,
            };
         }
      })
   );

   // 3️⃣ Trie les projets par le champ 'order' (string converti en nombre)
   const sortedProjects = projectsWithACF.sort((a, b) => {
      // Si un projet n'a pas d'order, on le met à la fin
      if (!a.order && !b.order) return 0;
      if (!a.order) return 1;
      if (!b.order) return -1;

      // Convertit le string en nombre pour le tri
      const orderA = Number.parseInt(a.order, 10) || 0;
      const orderB = Number.parseInt(b.order, 10) || 0;

      return orderA - orderB;
   });

   return sortedProjects;
}
