# noemicilenti.com backend

Backend for [noemicilenti.com](https://noemicilenti.com) based on [strapi](https://strapi.io/)

# Develop

Create an `.env` file:
```console
cp .env.template .env
```

and fill with correct data.

## Available Scripts

### `yarn develop`

Runs the app in the development mode at [http://localhost:1337](http://localhost:1337).

### `yarn build`

Builds the app for production to the `build` folder.

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

### Database

To reset the Postgres database on heroku:

```console
heroku restart
heroku pg:reset DATABASE
```
