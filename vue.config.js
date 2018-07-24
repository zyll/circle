require('dotenv').config
module.exports = {
  lintOnSave: false,
  baseUrl: process.env.BASE_URL || '/'
}
