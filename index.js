"use strict";

const ip = require("ipaddr.js");

const prefix = {
  v4: ".in-addr.arpa",
  v6: ".ip6.arpa",
};

module.exports = function ptr(addr) {
  if (typeof addr !== "string") {
    throw new TypeError("'addr' argument must be a string, got a " + typeof addr);
  }

  const parsed = ip.parse(addr);
  if (parsed instanceof ip.IPv4) {
    return addr.split(".").reverse().join(".") + prefix.v4;
  } else if (parsed instanceof ip.IPv6) {
    return parsed.toNormalizedString().split(":").map(function(n) {
      return n.length >= 4 ? n : new Array(4 - n.length + 1).join("0") + n;
    }).join("").split("").reverse().join(".") + prefix.v6;
  } else {
    throw new Error("Invalid IP address: " + addr);
  }
};
