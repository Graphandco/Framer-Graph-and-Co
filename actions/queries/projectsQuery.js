import { GLOBAL_PAGE_FIELDS } from "@/actions/queries/globalQuery";
export const PROJECTS_QUERY = `
  query GetProjects {
    projects(first: 100) {
      nodes {
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
