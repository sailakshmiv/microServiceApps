'use strict';

//initializing a socket to emit data
const io = require('./socket')();

//emitting data after reading from data.txt
require('./middleware/processData.middleware')(io);

