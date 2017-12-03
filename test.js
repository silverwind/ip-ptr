"use strict";

const assert = require("assert");
const ptr = require(".");

assert.throws(() => ptr());
assert.throws(() => ptr({}));
assert.throws(() => ptr(1));

assert.strictEqual(ptr("1.2.3.4"), "4.3.2.1.in-addr.arpa");
assert.strictEqual(ptr("127.0.0.1"), "1.0.0.127.in-addr.arpa");
assert.strictEqual(ptr("1.2.3.4", {suffix: false}), "4.3.2.1");
assert.strictEqual(ptr("127.0.0.1", {suffix: false}), "1.0.0.127");

assert.strictEqual(
  ptr("2001:db8::1"),
  "1.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.8.b.d.0.1.0.0.2.ip6.arpa"
);
assert.strictEqual(
  ptr("::1", {suffix: false}),
  "1.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0"
);
assert.strictEqual(
  ptr("2001:db8::1", {suffix: false}),
  "1.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.8.b.d.0.1.0.0.2"
);
assert.strictEqual(
  ptr("::1"),
  "1.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.ip6.arpa"
);
