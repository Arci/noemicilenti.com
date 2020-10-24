# noemicilenti.com

Backend for noemicilenti.com based on [strapi](https://strapi.io/)

# GraphQL

content can be queried via GraphQL at `/graphql`

## Exmple query

```graphql
query {
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
```
