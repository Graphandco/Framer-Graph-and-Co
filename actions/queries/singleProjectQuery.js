import { GLOBAL_PAGE_FIELDS } from "@/actions/queries/globalQuery";
export const SINGLE_PROJECT_QUERY = `
  query GetSingleProject($id: ID!) {
    project(id: $id, idType: DATABASE_ID) {
        ${GLOBAL_PAGE_FIELDS}
        slug
        projectAcf {
            category
            lienDuSite
            order
            featured
            positionDuBackground
            sousTitre

        }


      }
    }
  }
`;
