module.exports = ({ env }) => {
  if (env('NODE_ENV') == 'development') {
    return {
      defaultConnection: 'default',
      connections: {
        default: {
          connector: 'bookshelf',
          settings: {
            client: 'sqlite',
            filename: env('DATABASE_FILENAME', '.tmp/data.db'),
          },
          options: {
            useNullAsDefault: true,
          },
        },
      },
    }
  } else {
    // const parsed = url.parse(process.env.DATABASE_URL, true);
    // const [username, password] = parsed.auth.split(':');

    // settings.host     = parsed.hostname;
    // settings.port     = Number(parsed.port);
    // settings.database = parsed.pathname.substr(1);
    // settings.username = username;
    // settings.password = password;
    // settings.ssl      = (parsed.query.ssl === 'true');

    return {
      defaultConnection: 'default',
      connections: {
        default: {
          connector: 'bookshelf',
          settings: {
            client: 'postgres',
            host: env('DATABASE_HOST', ''),
            port: env.int('DATABASE_PORT', 5432),
            database: env('DATABASE_NAME', ''),
            username: env('DATABASE_USERNAME', ''),
            password: env('DATABASE_PASSWORD', ''),
            ssl: true
          },
          options: {},
        },
      },
    }
  }
};
