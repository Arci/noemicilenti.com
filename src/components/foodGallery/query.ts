import gql from 'graphql-tag';

gql`
  query FoodGallery {
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