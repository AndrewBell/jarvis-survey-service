/**
 * Created by Andrew Bell 12/26/2016
 * www.recursivechaos.com
 * andrew@recursivechaos.com
 * Licensed under MIT License 2016. See license.txt for details.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SurveySchema = new Schema({
  name: String
});

module.exports = mongoose.model('Survey', SurveySchema);
