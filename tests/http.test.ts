import { assertStrictEquals } from "./deps.ts";
import { Http } from "../mod.ts";

Deno.test("Http.Header", () => {
  assertStrictEquals(Http.Header.CONTENT_TYPE, "Content-Type");
});

Deno.test("Http.Method", () => {
  assertStrictEquals(Http.Method.GET, "GET");
});
