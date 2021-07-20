module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 80),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '41ab20526616457b1b85bc4aeec573b2'),
    },
  },
});
