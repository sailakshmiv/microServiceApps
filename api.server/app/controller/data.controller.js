'use strict';
module.exports = (function(){
    
    const Data = require('../model/data.model'),
          debug = require('debug')('main:data-controller'),
          that={};
        
    that.getData = (req,res,next) => {
        Data.fetchAll(function(err,result){
           if(err){
                next(err);
           }
           
           res.json(result); 
        });
    };
    
    return that;
})();