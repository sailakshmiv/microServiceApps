'use strict';

module.exports = exports = (function(){
    const Data = require('mongoose').model('exchangeData'),
          debug = require('debug')('main:data_model'),
          that={};
    
    that.insert = (_data,cb) =>{
        const data = new Data(_data);

        data.save((err)=>{
            if(err){
                debug('Error: Data insertion failure');
                cb(err);
            }
            cb(null,'inserted');
        });
    };

    that.exists = (_data,cb) => {

        Data.find({'instrument':_data},(err,data)=>{
           if(err){
                debug('Error: Data retrival failure');
                cb(err);
           }
           cb(null,data);
        });
    };
    
    that.update = (_data,cb)=>{
        
        Data.update({'instrument':_data.instrument},
                    {$set:{'position':_data.position}},function(err,data){
                    if(err){
                        debug('Error: Data Updating failure');
                        cb(err);
                    }       
                    cb(null,data);  
                })
    
    };

    return that;

})();

