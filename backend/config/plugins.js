module.exports = ({ env }) => ({
  upload: {
    provider: 'ftp-v2',
    providerOptions: {
      host: env('FTP_HOST'),
      port: env('FTP_PORT'),
      user: env('FTP_USER'),
      password: env('FTP_PASSWORD'),
      basePath: '/public_html/images/',
      baseUrl: 'https://noemicilenti.com/images/',
    },
  },
  graphql: {
    playgroundAlways: true,
  }
});