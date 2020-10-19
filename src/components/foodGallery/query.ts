import gql from 'graphql-tag';

export const FOOD_GALLERY = gql`
  query foodGallery {
    food {
      gallery {
        photos {
          name
          alternativeText
          caption
          width
          height
          formats
          mime
          url
        }
      }
    }
    contact {
      email
      phone
      social {
        facebook
        instagram
        vogue
      }
    }
  }
`;