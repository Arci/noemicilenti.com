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
      social {
        facebook
        instagram
        youtube
      }
    }
  }
`;