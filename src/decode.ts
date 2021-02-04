#!/usr/bin/env node

const {
  decode
} = require('./codec.js');

const input = process.argv[2] || 'No input provided!';

console.table([decode].map(fn => ({input, output: fn(input)})));

// This is a hack against stupid TypeScript
export = module.exports = null;
