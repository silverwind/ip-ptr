import {parseIp} from "ip-bigint";

/** Get the PTR (reverse DNS) name for a given IPv4 or IPv6 address. Throws if `ip` is not a valid IP address. */
export default function ptr(ip: string): string {
  const {number, version} = parseIp(ip);
  if (version === 4) {
    const num = Number(number);
    return `${num & 0xff}.${(num >>> 8) & 0xff}.${(num >>> 16) & 0xff}.${(num >>> 24) & 0xff}.in-addr.arpa`;
  }
  return `${number.toString(16).padStart(32, "0").split("").reverse().join(".")}.ip6.arpa`;
}
