'use strict';

const io = require('socket.io-client');
const processData = require('../middleware/processData.js');
const Data = require('../model/data.model');
const debug = require('debug')('main:socket');
const config = require('./config');

module.exports = exports = function(){
    const socket = io(config.url);
          
    //processing and updating data into database
    socket.on('data', function (data) {
        
        processData.parseData(data,callback);
        
        function callback(err,parsedData){
            
            if(err){
                debug('Error while parsing recieved Data');
            }
            //checking if instrument is already present
            Data.exists(parsedData.instrument,function(err,result){
                if(err){
                    debug('Error while fetching record',err);
                }
                
                if( result.length !== 0 ){
                    result[0].position += parsedData.position;
                    //updating the value    
                    Data.update(result[0],function(err,result){
                        if(err){
                            debug('Error while fetching record',err);
                        }       
                        debug('updated');        
                    });
                    
                }else{
                    //inserting the new instrument record
                    Data.insert(parsedData,function(err,result){
                        if(err){
                            debug('Error while fetching record',err);
                        }
                        debug('inserted');
                    });
                }
            });
            
        }
    });
}
  