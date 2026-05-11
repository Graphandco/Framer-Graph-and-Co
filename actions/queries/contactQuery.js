import { GLOBAL_PAGE_FIELDS } from "@/actions/queries/globalQuery";

export const CONTACT_QUERY = `
  query GetContactContent($id: ID!) {
    page(id: $id, idType: DATABASE_ID) {
      ${GLOBAL_PAGE_FIELDS}
        faq {
            item {
                question
                answer
            }
        }

    }
  }
`;
