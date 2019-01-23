"use strict";

const ipaddr = require("ipaddr.js");

module.exports = function ptr(ip) {
  let parsed;
  try {
    parsed = ipaddr.parse(ip);
  } catch (e) {
    throw new Error(`Invalid IP address: ${ip}`);
  }

  if (parsed instanceof ipaddr.IPv4) {
    return ip.split(".").reverse().join(".") + ".in-addr.arpa";
  } else {
    return parsed.toNormalizedString().split(":").map(n => {
      return n.length >= 4 ? n : new Array(4 - n.length + 1).join("0") + n;
    }).join("").split("").reverse().join(".") + ".ip6.arpa";
  }
};
