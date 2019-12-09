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
});
