'use strict';

//middleware to process the data
var processData = require('../helper/processData');
const debug = require('debug')('main:processData');

module.exports = exports = function(io){

    //read file
    processData.readFile((err,msg)=>{
        if(err){
            throw new Error('Error while reading file');
        }
        debug('file read complete');
        emitLine();
    });
    
    function emitLine(){
        //will keep emiting
        setInterval(()=>{
            
            processData.nextData((err,data)=>{
                if(err){
                    throw new Error('Error while processing data',err);
                }
                io.emit('data',data);
                debug('data emitted',data);
            });
        },1000);    
    }
    
    
};
