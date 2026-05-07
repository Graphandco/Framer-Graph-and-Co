import { GLOBAL_PAGE_FIELDS } from "@/actions/queries/globalQuery";

export const HOMEPAGE_QUERY = `
  query GetHomepageContent($id: ID!) {
    page(id: $id, idType: DATABASE_ID) {
      ${GLOBAL_PAGE_FIELDS}
      homepage {

        hero {
            hero_title
            hero_description
            atouts {
            name
            }
        }


      }
    }
  }
`;
