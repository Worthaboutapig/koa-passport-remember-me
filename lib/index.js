/**
 * Module dependencies.
 */
var Strategy = require('./strategy');


/**
 * Module version.
 */
require('pkginfo')(module, { include: ['version'], dir: __dirname });

/**
 * Expose constructors.
 */
exports.Strategy = Strategy;
