const fs = require('fs');
const path = require('path');
const getBabelRelayPlugin = require('babel-relay-plugin');

let schema = null;
if (fs.existsSync(path.resolve(__dirname, '../helpers/schema/graphql-schema.json'))) {
  const schemaData = require(path.resolve(__dirname, '../helpers/schema/graphql-schema.json')).data;
  schema = getBabelRelayPlugin(schemaData);
}

module.exports = schema;
