# noemicilenti.com backend

Backend for [noemicilenti.com](https://noemicilenti.com) based on [strapi](https://strapi.io/)

## Development variables

Create an `.env` file:
```console
cp .env.template .env
```

and fill with correct data.

## Available Scripts

### `yarn start`

Runs the app in the development mode at [http://localhost:1337](http://localhost:1337).

### `yarn build`

Builds the app for production to the `build` folder.

The build is minified and the filenames include the hashes.

### `yarn deploy`

Deploy the application to heroku, see [Deploy](#Deploy).

# Query data

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

# Deploy

## Heroku

Push the changes using subtree prefix:
```console
git subtree push --prefix backend heroku master
```

To add Heroku remote:
```console
heroku git:remote -a my-app
```
