'use strict';
/**
 * Adding various middleware to app
 */

module.exports = function(app){
    const logger = require('morgan');
    
    //logs incoming request in dev pattern 
    app.use(logger('dev'));
};


