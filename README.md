# ip-ptr
[![](https://img.shields.io/npm/v/ip-ptr.svg?style=flat)](https://www.npmjs.org/package/ip-ptr) [![](https://img.shields.io/npm/dm/ip-ptr.svg)](https://www.npmjs.org/package/ip-ptr) [![](https://api.travis-ci.org/silverwind/ip-ptr.svg?style=flat)](https://travis-ci.org/silverwind/ip-ptr)
> Get the PTR name for a given IPv4 or IPv6 address

## Installation
```console
$ npm i ip-ptr
```
## Example
```js
const ipPtr = require('ip-ptr');

ipPtr('1.2.3.4');
//=> 4.3.2.1.in-addr.arpa
ipPtr('2001:db8::1');
//=> 1.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.8.b.d.0.1.0.0.2.ip6.arpa
```

## API
### ipPtr(ip)
- `ip` *string* - A IPv4 or IPv6 address.

Will throw on if `ip` is not a valid IP address.

© [silverwind](https://github.com/silverwind), distributed under BSD licence
