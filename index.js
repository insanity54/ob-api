/**
 * Module dependencies
 */

var _ = require('lodash');
var http = require('http');
var makeUrl = require('./lib/makeUrl');
var resources = require('./lib/resources');

/**
 * 
 */

_.map(resources, function(resource) {
  if(typeof resource.method !== 'undefined') {
    exports[resource.name] = function(params, query, cb) {
      var url;
      if(resource.method === 'POST' || resource.method === 'PUT') {
        url = makeUrl(resource.path, params);
      } else {
        url = makeUrl(resource.path, params, query);
      }

      var req = http.request({
        hostname: 'localhost',
        port: 18469,
        method: resource.method,
        path: url
      }, function(res) {
        res.on('data', function(chunk) {
          console.log(chunk.toString());
        });

        res.on('error', function(err) {
          console.log(err);
        });

        res.on('end', function() {
          console.log('end'); 
        });
      });

      if(resource.method === 'POST' || resource.method === 'PUT') {
        req.write(query);
      }

      req.end();
    }
  } else {
    exports[resource.name] = _.mapValues(resource.methods, function(x) {
      return function(params, query, cb) {
        var url;
        if(x.method === 'POST' || x.method === 'PUT') {
          url = makeUrl(x.path, params);
        } else {
          url = makeUrl(x.path, params, query);
        }

        var req = http.request({
          hostname: 'localhost',
          port: 18469,
          method: x.method,
          path: url
        }, function(res) {
          res.on('data', function(chunk) {
            console.log(chunk.toString());
          });

          res.on('error', function(err) {
            console.log(err);
          });

          res.on('end', function() {
            console.log('end'); 
          });
        });

        if(x.method === 'POST' || x.method === 'PUT') {
          req.write(query);
        }

        req.end();
      }
    });
  }
});
