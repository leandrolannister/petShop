const express = require('./src/config/express.js');
const connection = require('./src/infra/connection.js');
const Table = require('./src/infra/Table.js');

return new Promise((resolve, reject) => {
   connection.connect((error) => {
      if (error)
         reject('Error on connect to mysql');
      resolve(createTable(connection));  
   });
});

function createTable(connection) {
   Table.start(connection);

   Table.createAtendimentos()
   .then( () => {
      listen(express);     
   }).catch((error) => {
      console.log(error);
   });
}

function listen(express) {   
   const app = express();
   app.listen(3000, () => {
      console.log('Server is running at 3000');
   });
}
