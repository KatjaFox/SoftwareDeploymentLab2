// var request = require("request"),
//     assert = require('assert'),
//     base_url = "http://localhost:3000/";

// describe("Hello World Server", function() {
//   describe("GET /", function() {
//     it("returns status code 200", function(done) {
//       request.get(base_url, function(error, response, body) {
//         //expect(response.statusCode).toBe(200);
//         assert.equal(200, response.statusCode);
//         done();
//       });
//     });

//     it("returns Hello World", function(done) {
//       request.get(base_url, function(error, response, body) {
//         // expect(body).toBe(undefined);
//         assert.equal(undefined, body); //"<h1>Express</h1><p>Welcome to Express</p><p>this is a test version</p>"
//         //helloWorld.closeServer();
//         done();
//       });
//     });
//   });
// });