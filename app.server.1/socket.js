'use strict';

const port = require('./config/config').PORT;
const debug = require('debug')('main:Socket');

module.exports = exports = function(){
    const io = require('socket.io')(port);
    
    //connecting clients
    io.on('connection',function(socket){
      
      socket.on('disconnect', function () {
        debug('Client disconnected');
      });
    });
    
    return io;
}
