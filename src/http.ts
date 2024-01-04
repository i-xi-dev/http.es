export namespace Http {
  /**
   * The header field name.
   */
  export const Header = {
    CONTENT_ENCODING: "Content-Encoding",
    CONTENT_LANGUAGE: "Content-Language",
    CONTENT_LENGTH: "Content-Length",
    CONTENT_LOCATION: "Content-Location",
    CONTENT_TYPE: "Content-Type",
  } as const;

  /**
   * The request method name.
   */
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

  // export async function get(request: Request): Promise<Response> {

  // }
}
