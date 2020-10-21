require('dotenv').config();


// const knex = require('knex')({

//     // developement: {

//         client: 'postgresql',
//         connection: {
//             user:process.env.DATA_USER,
//             host:process.env.DATA_HOST, /*verify with command " \conninfo" in psql repl*/
//             database: process.env.DATA_DATABASE,
//             password: process.env.DATA_PASS,
//             port: process.env.DATA_PORT
//           },
        
//         seeds: {
//             directory: './seeds'
//         }
//     // }
    
// });



// module.exports = knex




module.exports = {
    development: {
      client: 'pg',
      connection: 'postgres://localhost/fec',
      seeds: {
      directory: __dirname + '/seeds'
      }
    }
  };