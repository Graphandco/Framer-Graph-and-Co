import { GLOBAL_PAGE_FIELDS } from "@/actions/queries/globalQuery";

export const SINGLE_BLOG_QUERY = `
  query GetSingleBlog($slug: ID!) {
    post(id: $slug, idType: SLUG) {
      ${GLOBAL_PAGE_FIELDS}
      slug
      date
      categories {
        nodes {
          name
        }
      }
      blogAcf {
        sousTitre
      }
    }
  }
`;
