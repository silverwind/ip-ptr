"use strict";

var assert = require("assert");
var ipPtr = require(".");

assert.strictEqual(ipPtr("1.2.3.4"), "4.3.2.1.in-addr.arpa");
assert.strictEqual(ipPtr("127.0.0.1"), "1.0.0.127.in-addr.arpa");

assert.strictEqual(
  ipPtr("2001:db8::1"),
  "1.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.8.b.d.0.1.0.0.2.ip6.arpa"
);
assert.strictEqual(
  ipPtr("::1"),
  "1.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.ip6.arpa"
);
