namespace Http {
  export const Header = {
    CONTENT_ENCODING: "Content-Encoding",
    CONTENT_LANGUAGE: "Content-Language",
    CONTENT_LENGTH: "Content-Length",
    CONTENT_LOCATION: "Content-Location",
    CONTENT_TYPE: "Content-Type",
  } as const;

  export const Method = {
    CONNECT: "CONNECT",
    DELETE: "DELETE",
    GET: "GET",
    HEAD: "HEAD",
    OPTIONS: "OPTIONS",
    PATCH: "PATCH",
    POST: "POST",
    PUT: "PUT",
    TRACE: "TRACE",
  } as const;
}
Object.freeze(Http);

export { Http };
