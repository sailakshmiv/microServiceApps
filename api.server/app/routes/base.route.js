'use strict';

module.exports = function(app){
    const data = require('../controller/data.controller');
    
    app.get('/',(req,res)=>{
       res.send('This is API Server');
    });
    
    app.get('/api/v1/fetchAll',data.getData);
    
};

