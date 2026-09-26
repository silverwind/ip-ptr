import ptr from "./index.ts";

test("ptr", () => {
  for (const input of [undefined, {}, 1]) {
    expect(() => ptr(input as string)).toThrow();
  }

  expect(ptr("1.2.3.4")).toEqual("4.3.2.1.in-addr.arpa");
  expect(ptr("127.0.0.1")).toEqual("1.0.0.127.in-addr.arpa");
  expect(ptr("2001:db8::1")).toEqual("1.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.8.b.d.0.1.0.0.2.ip6.arpa");
  expect(ptr("::1")).toEqual("1.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.ip6.arpa");
});
