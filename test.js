const { encode, decode } = require('./')

const errors = []

function runTest (title, actual, expected, whenFails) {
  const ok = actual === expected
  process.stdout.write(ok ? '√' : 'ƒ')
  !ok && errors.push(`FAIL: ${title} ${whenFails}; actual: ${actual}, expected: ${expected}`)
}

function tests () {
  runTest('decode', typeof decode, 'function', 'decode should be a function')
  runTest('encode', typeof encode, 'function', 'encode should be a function')
  runTest('decode(encode())', decode(encode('bbc')), 'bbc', 'decode(encode()) should properly work')
  runTest('decode(encode())', decode(encode('bb')), 'bb', 'decode(encode()) should properly work')
  runTest('decode(encode())', decode(encode('b')), 'b', 'decode(encode()) should properly work')
  runTest('decode(encode())', decode(encode('')), '', 'decode(encode()) should properly work')

  console.log('\nDONE!')
  errors.length > 0 && console.log(errors)
}

tests()
