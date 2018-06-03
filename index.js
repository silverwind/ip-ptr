"use strict";

const ip = require("ipaddr.js");

const suffix = {
  v4: ".in-addr.arpa",
  v6: ".ip6.arpa",
};

module.exports = function ptr(addr, opts) {
  let parsed, result;

  opts = opts || {suffix: true};

  if (typeof addr !== "string") {
    throw new TypeError("'addr' argument must be a string, got a " + typeof addr);
  }

  try {
    parsed = ip.parse(addr);
  } catch (e) {
    throw new Error("Invalid IP address: " + addr);
  }

  if (parsed instanceof ip.IPv4) {
    result = addr.split(".").reverse().join(".");

    return opts.suffix ? result + suffix.v4 : result;
  } else if (parsed instanceof ip.IPv6) {
    result = parsed.toNormalizedString().split(":").map(n => {
      return n.length >= 4 ? n : new Array(4 - n.length + 1).join("0") + n;
    }).join("").split("").reverse().join(".");

    return opts.suffix ? result + suffix.v6 : result;
  }
};
