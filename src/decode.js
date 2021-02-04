#!/usr/bin/env node
"use strict";
var decode = require('./codec.js').decode;
var input = process.argv[2] || 'No input provided!';
console.table([decode].map(function (fn) { return ({ input: input, output: fn(input) }); }));
module.exports = module.exports = null;
//# sourceMappingURL=decode.js.map