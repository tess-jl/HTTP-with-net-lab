const request = require('supertest');
const app = require('../lib/app');

describe('app.js request handling', () => {
  it('handles a GET request for path "/" by setting the body to the string "hi" and sending it to client-side', () => {
    return request(app) 
      .get('/')
      .then(res => {
        // console.log(res, 'this is the res from our server back to the client');
        expect(res.text).toEqual('hi');
      });
  });

  it('handles a POST request for path "/echo" by echoing the request in the response', () => {
    return request(app) 
      .post('/echo')
      .send('my plain text')
      .then(res => {
        expect(res.request._data).toEqual('my plain text');
      });
  });

  it('handles a GET request for path "/red" by echoing the request in the response', () => {
    return request(app) 
      .get('/red')
      .then(res => {
        expect(res.text).toEqual('<h1>red</h1>');
      });
  });

  
});
