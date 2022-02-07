const express = require('./src/config/express.js');

const connection = require('./src/infra/connection.js');

connection.connect((error) => {
    if (error){
       console.log('Error on connection with mysql');
    }else {
       const app = express();
       app.listen(3000, () => {
          console.log('Server is running at 3000');
       });
    }    
});



