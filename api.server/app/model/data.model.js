'use strict';

module.exports = exports = (function(){
    const Data = require('mongoose').model('exchangeData'),
          debug = require('debug')('main:data_model'),
          that={};
  
   that.fetchAll = (cb) => {
        Data.find((err,data)=>{
           if(err){
                debug('Error: Data retrival failure');
                cb(err);
           }
           cb(null,data);
        });
    };


    return that;

})();

