# @m1yh3m/base.64.codec.node.lib

Encodes and decodes a string to and from base64

## installation

```bash
npm i @m1yh3m/base.64.codec.node.lib
```

## usage

```javascript
const codec = require('@m1yh3m/base.64.codec.node.lib')
codec.decode(codec.encode("I will be encoded and then decoded"))
// 'I will be encoded and then decoded'
```

## Usage as executables

I know it's a lib.

```bash

npm i -g @@m1yh3m/base.64.codec.node.lib

_encode64 what!
┌─────────┬─────────┬────────────┐
│ (index) │  input  │   output   │
├─────────┼─────────┼────────────┤
│    0    │ 'what!' │ 'd2hhdCE=' │
└─────────┴─────────┴────────────┘

_decode64 d2hhdCE=
┌─────────┬────────────┬─────────┐
│ (index) │   input    │ output  │
├─────────┼────────────┼─────────┤
│    0    │ 'd2hhdCE=' │ 'what!' │
└─────────┴────────────┴─────────┘

echo "d2hhdA==" | xargs -n1 _64
┌─────────┬────────────┬────────────────┐
│ (index) │   input    │     output     │
├─────────┼────────────┼────────────────┤
│    0    │ 'd2hhdA==' │ 'ZDJoaGRBPT0=' │
│    1    │ 'd2hhdA==' │     'what'     │
└─────────┴────────────┴────────────────┘

_64 what
┌─────────┬────────┬────────────┐
│ (index) │ input  │   output   │
├─────────┼────────┼────────────┤
│    0    │ 'what' │ 'd2hhdA==' │
│    1    │ 'what' │  'Â\x16-'  │
└─────────┴────────┴────────────┘


```
