'use strict';

//loading database model
require('./config/mongoose')();

require('./config/socket')();
      
console.log('Started!');