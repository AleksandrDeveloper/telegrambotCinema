const dotenv = require('dotenv')
dotenv.config()


module.exports = {
    TOKEN: process.env.token,
    MongoUrl:process.env.mongoUrl
}