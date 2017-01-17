"use strict";

const ip = require("ip");

const prefix = {
  v4: ".in-addr.arpa",
  v6: ".ip6.arpa",
};

module.exports = function ptr(addr) {
  if (typeof addr !== "string") {
    throw new TypeError("'addr' argument must be a string, got a " + typeof addr);
  }

  if (ip.isV4Format(addr)) {
    return addr.split(".").reverse().join(".") + prefix.v4;
  } else if (ip.isV6Format(addr)) {
    return ip.toBuffer(addr).toString("hex").split("").reverse().join(".") + prefix.v6;
  } else {
    throw new Error("Invalid IP address: " + addr);
  }
};
