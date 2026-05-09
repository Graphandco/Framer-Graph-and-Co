export const PACKS_QUERY = `
  query GetPacks {
    packs(first: 100) {
      nodes {
        title
        
        packs {
            order
            bestSeller
            description
            details {
                checked
                name
            }
            premium
            price
        }

      }
    }
  }
`;
