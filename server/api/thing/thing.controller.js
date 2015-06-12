/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /things              ->  index
 * POST    /things              ->  create
 * GET     /things/:id          ->  show
 * PUT     /things/:id          ->  update
 * DELETE  /things/:id          ->  destroy
 */

'use strict';

var _ = require('lodash');
var Discogs = require('disconnect').Client;

// Get list of things
exports.index = function(req, res) {
  var col = new Discogs('MyUserAgent/1.0', {userToken: 'mjOmHuJCIPqxBTfojYPAroqhoCPbhNjtBxpMHzaP'}).user().collection();
  
  col.releases('killa_kyle', 0, function(err, data){
      // console.log(data);
      // res.json(data);
      // var collectiondata = JSON.stringify(data);
      var collectiondata = data;
      res.send(collectiondata.releases);
  });
};