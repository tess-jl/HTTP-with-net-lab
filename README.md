# HTTP-with-net-lab

### Node.js, Express, Jest

___
#### Assignment: "Using only the `net` module create an HTTP server that responds with different messages based on path.


### Parse a Request

`parseRequest` takes a `rawRequest` (an HTTP request message). It should take that `rawRequest`
and return an object with `body`, `method`, and `path` from the `rawRequest`.

### Create a Response

module.exports = ({ body = '', contentType = 'text/html', status = '200 OK' }) => {
  return `
HTTP/1.1 ${status}
Accept-Ranges: bytes
Content-Length: ${body.length}
Content-Type: ${contentType}

${body}
  `.trim();
};

`createResponse` takes an object with `body`, `contentText`, and `status`. It should use
that information to construct an HTTP response message. Make sure to set the:

* status
* Content-Length header
* Content-Type header
* HTTP body

### Handle Requests

path      | method | body
--------  | ------ | ----
`/`       | `GET`  | plain text "hi"
`/echo`   | `POST` | status code 200 and plain text with the request body
`/red`    | `GET`  | html with an h1 and the word red
`/green`  | `GET`  | html with an h1 and the word green
`/blue`   | `GET`  | html with an h1 and the word blue

Everything else respond with 404 and a not found HTML page.

#### Testing Requests

Use `supertest` to test your routes."
