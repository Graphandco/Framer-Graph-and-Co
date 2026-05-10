import { GLOBAL_PAGE_FIELDS } from "@/actions/queries/globalQuery";

export const SINGLE_PROJECT_QUERY = `
  query GetSingleProject($slug: ID!) {
    project(id: $slug, idType: SLUG) {
      ${GLOBAL_PAGE_FIELDS}
      slug
      projectAcf {
        category
        lienDuSite
        order
        featured
        positionDuBackground
        sousTitre
        galerieDimages {
          nodes {
            altText
            sourceUrl
            mediaDetails {
              width
              height
            }
          }
        }
      }
    }
  }
`;
