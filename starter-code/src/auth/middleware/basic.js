'use strict';

const base64 = require('base-64');
const { users } = require('../models/index.js'); // fixed users from user to users

module.exports = async (req, res, next) => {

  if (!req.headers.authorization) { next ('no auth headers present'); }

  let basic = req.headers.authorization.split(' ').pop(); // added .split(' ').pop() to get the encoded username and password
  let [username, password] = base64.decode(basic).split(':'); // changed password from pass to password

  try {
    req.user = await users.authenticateBasic(username, password); // fixed users from user to users, and changed password from pass to password
    next();
  } catch (e) {
    console.error(e);
    res.status(403).send('Invalid Login');
  }

};

