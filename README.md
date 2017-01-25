# ip-ptr
[![](https://img.shields.io/npm/v/ip-ptr.svg?style=flat)](https://www.npmjs.org/package/ip-ptr) [![](https://img.shields.io/npm/dm/ip-ptr.svg)](https://www.npmjs.org/package/ip-ptr) [![](https://api.travis-ci.org/silverwind/ip-ptr.svg?style=flat)](https://travis-ci.org/silverwind/ip-ptr)
> Get the PTR name for a given IPv4 or IPv6 address

## Installation
```console
$ npm i --save ip-ptr
```
## Example
```js
var ptr = require('ip-ptr');
console.log(ptr('1.2.3.4'));
//=> 4.3.2.1.in-addr.arpa
console.log(ptr('2001:db8::1'));
//=> 1.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.8.b.d.0.1.0.0.2.ip6.arpa
```

## API
### ptr(addr, opts)
- `addr` *String* - A valid IPv4 or IPv6 address.
- `opts` *Object* - A optional options object.
  - `suffix` *Boolean* - Whether to append the ARPA suffix. Default: `true`.

© [silverwind](https://github.com/silverwind), distributed under BSD licence
