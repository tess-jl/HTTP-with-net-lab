module.exports = rawRequest => {
  let request = rawRequest.toString().split('\n');
  let stringRequest = request.toString().split(' ');

  let method = stringRequest[0];
  let path = stringRequest[1];
  const body = rawRequest.split('\r\n\r\n')[1];

  return { method, path, body };
};
