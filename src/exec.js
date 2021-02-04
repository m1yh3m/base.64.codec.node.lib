#!/usr/bin/env node
"use strict";
var _a = require('./codec.js'), encode = _a.encode, decode = _a.decode;
var input = process.argv[2] || 'No input provided!';
console.table([encode, decode].map(function (fn) { return ({ input: input, output: fn(input) }); }));
module.exports = module.exports = null;
//# sourceMappingURL=exec.js.map