/**
 * Module dependencies
 */

var _ = require('lodash');

/**
 * Make URL from params/query object
 */

module.exports = function(url, params, query) {
  var parts = url.split('/');
  var result = '';

  // Params
  parts = _.map(parts, function(part) {
    if(part[0] === ':') {
      var key = part.slice(1);
      return encodeURIComponent(obj[key]);
    }
    return part;
  });
  result += parts.join('/');

  // Query
  if(typeof query !== 'undefined') {
    parts = [];
    for(var i in query) {
      parts.push(i + '=' + encodeURIComponent(query[i]));
    }
    if(parts.length) {
      result += '?' + parts.join('&');
    }
  }

  return result; 
}
