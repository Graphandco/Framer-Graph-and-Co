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

        expertise {
            top_legend
            title
            description
        }

        content {
            black_title
            grey_title
            main_text
            image {
                node {
                    id
                    sourceUrl
                    altText
                    mediaDetails {
                        width
                        height
                    }
                }
            }
        }


      }
    }
  }
`;
