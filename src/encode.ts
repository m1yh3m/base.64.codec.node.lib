#!/usr/bin/env node

const {
  encode
} = require('./codec.js');

const input = process.argv[2] || 'No input provided!';

console.table([encode].map(fn => ({input, output: fn(input)})));

// This is a hack against stupid TypeScript
export = module.exports = null;
