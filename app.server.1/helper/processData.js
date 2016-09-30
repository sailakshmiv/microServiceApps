'use strict';
const fs = require('fs');
const debug = require('debug')('main:processData');

module.exports = exports = (function(){
    
    var that = {};
    var _data = [];
    var _lineNumber = 0;
    
    that.nextData = nextData;
    that.readFile = readFile;
    
    return that;
    
    //functions below
    function nextData(callback){
        
        if(_data.length ===0)
            return callback(null,0);
        
        
        //emitting line
        callback(null,_data[getLine()]);

        //line added to keep emitting.
        if(_lineNumber===8)
            _lineNumber=0;
    }
    
    
    function readFile(callback){
         
         fs.readFile('./data/data.txt','utf-8',(err,data)=>{
            if(err){
                debug('Error Reading file',err);
                return callback(err);
            }
            
            _data = data.split('\n');
            return callback(null,'Successfully read');
        });
    }
    
    function getLine(){
        return _lineNumber++;
    }
    
})();