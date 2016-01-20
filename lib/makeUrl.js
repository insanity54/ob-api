/**
 * Module dependencies
 */

var _ = require('lodash');

/**
 * Make URL from params/query object
 */

module.exports = function(url, query) {
  var result = '';

  // Query
  if(typeof query !== 'undefined') {
    var parts = [];
    for(var i in query) {
      parts.push(i + '=' + encodeURIComponent(query[i]));
    }
    if(parts.length) {
      result += '?' + parts.join('&');
    }
  }

  return result; 
}
