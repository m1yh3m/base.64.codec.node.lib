#!/usr/bin/env node
"use strict";
var encode = require('./codec.js').encode;
var input = process.argv[2] || 'No input provided!';
console.table([encode].map(function (fn) { return ({ input: input, output: fn(input) }); }));
module.exports = module.exports = null;
//# sourceMappingURL=encode.js.map