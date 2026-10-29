const { defineConfig } = require("cypress");
require('dotenv').config();



module.exports = defineConfig({
  allowCypressEnv: true,

  e2e: {

    baseUrl: 'https://front.serverest.dev/',
    env: {
      username: 'mike.inspeferreira@gmail.com', //process.env.USER_ADMIN
      password: 'Teste1234',
      baseUrl: 'https://front.serverest.dev'
    },
    setupNodeEvents(on, config) {
      expose: {
        snapshotOnly: true
      }


    },

  },
});
