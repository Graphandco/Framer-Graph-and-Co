import { GLOBAL_PAGE_FIELDS } from "@/actions/queries/globalQuery";

export const TARIFS_QUERY = `
  query GetTarifsContent($id: ID!) {
    page(id: $id, idType: DATABASE_ID) {
      ${GLOBAL_PAGE_FIELDS}
      tarifs {
        intro_text
        packs_title
        packs_description

        outro_text {
            first_title
            second_title
            description
            velocity_text
        }

        user_text1
        user_text2
      }

    }
  }
`;
