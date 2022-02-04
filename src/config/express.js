const express = require('express');
const consign = require('consign');
const bodyParse = require('body-parser');

module.exports = () => {
   const app = express();
         app.use(bodyParse.json({extended:true}));         
         
   consign()
      .include('./src/app/controllers')
      .into(app);

   return app;
}



     
  
