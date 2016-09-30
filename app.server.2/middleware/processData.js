'use strict';
const fs = require('fs');
const debug = require('debug')('main:processData');

module.exports = exports = (function(){
    
    var that = {};
    
    that.parseData = parseData;
    return that;
    
    //functions
    function parseData(data,callback){
        debug('INPUT: ', data);
        //processing
        if(data!=null){
            //parsing
            let temp = (data.split(':'))[1].split('|');
            let result = {};
            let sold = 0;
            temp.forEach((v)=>{
                if(v!==''){
                    let a = v.split('=');
                    if(a[0]==='48')
                        result['instrument'] = parseInt(a[1]);
                    else if(a[0]==='32')
                        result['position'] = parseInt(a[1]);
                    else if(a[0]==='54')
                        sold = parseInt(a[1]);
                }
            });
            
            //bought
            if(sold === 1){
                result['position'] = -result['position'];
            }
            
            debug('OUTPUT: ',result);
            return callback(null,result);
            
        }else{
            return callback(null,'No more Data to process');
        }
    }
    
})();