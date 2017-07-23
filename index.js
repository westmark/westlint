const configure = require( './config' );

const eslintConfig = configure( [ './node_modules' ] );

module.exports = eslintConfig;
