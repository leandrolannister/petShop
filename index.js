const express = require('./src/config/express.js');
const connection = require('./src/infra/connection.js');

return new Promise((resolve, reject) => {
   connection.connect((error) => {
      if (error)
         reject('Error on connect to mysql');
      resolve(listen(express));
   });
});

function listen(express) {
   const app = express();
   app.listen(3000, () => {
      console.log('Server is running at 3000');
   });
}



