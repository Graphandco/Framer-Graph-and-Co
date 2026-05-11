export const BLOGS_QUERY = `
  query GetBlogs {
    posts(first: 100) {
      nodes {
        databaseId
        title
        slug
        date
        featuredImage {
            node {
            altText
            mediaDetails {
                height
                width
            }
            sourceUrl
            }
        }
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
  }
`;
