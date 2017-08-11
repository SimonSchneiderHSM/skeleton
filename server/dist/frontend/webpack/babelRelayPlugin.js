'use strict';

var fs = require('fs');
var path = require('path');
var getBabelRelayPlugin = require('babel-relay-plugin');

var schema = null;
if (fs.existsSync(path.resolve(__dirname, '../helpers/schema/graphql-schema.json'))) {
  var schemaData = require(path.resolve(__dirname, '../helpers/schema/graphql-schema.json')).data;
  schema = getBabelRelayPlugin(schemaData);
}

module.exports = schema;
