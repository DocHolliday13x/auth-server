'use strict';

// Start up DB Server
const { db } = require('./starter-code/src/auth/models/index.js');
db.sync()
  .then(() => {

    // Start the web server
    require('./starter-code/src/server.js').start(process.env.PORT);
  });

