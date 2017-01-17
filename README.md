# ip-ptr [![NPM version](https://img.shields.io/npm/v/ip-ptr.svg?style=flat)](https://www.npmjs.org/package/ip-ptr) [![Dependency Status](http://img.shields.io/david/silverwind/ip-ptr.svg?style=flat)](https://david-dm.org/silverwind/ip-ptr)
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
### ptr(addr)
- `addr`: A valid IPv4 or IPv6 address.

© [silverwind](https://github.com/silverwind), distributed under BSD licence
