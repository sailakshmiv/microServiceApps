'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BattleSchema = new Schema({
  instrument:Number,
  position:Number
});

mongoose.model('exchangeData',BattleSchema);

