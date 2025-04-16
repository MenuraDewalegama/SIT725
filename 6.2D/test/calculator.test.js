const expect = require("chai").expect;
const request = require("request");

describe("Calculator API Testing", function () {
  const baseUrl = "http://localhost:3000";

  it("Addition should return correct results for two vald numbers", function (done) {
    request.get(`${baseUrl}/add?a=10&b=5`, function (error, response, body) {
      expect(response.statusCode).to.equal(200);
      expect(body).to.include("15");
      done();
    });
  });

  it("Subtraction should return correct results for two vald numbers", function (done) {
    request.get(`${baseUrl}/sub?a=8&b=2`, function (error, response, body) {
      expect(response.statusCode).to.equal(200);
      expect(body).to.include("6");
      done();
    });
  });

  it("Multiplication should return correct results for two vald numbers", function (done) {
    request.get(`${baseUrl}/mul?a=16&b=8`, function (error, response, body) {
      expect(response.statusCode).to.equal(200);
      expect(body).to.include("2");
      done();
    });
  });

  it("Division should return correct results for two vald numbers", function (done) {
    request.get(`${baseUrl}/mul?a=16&b=8`, function (error, response, body) {
      expect(response.statusCode).to.equal(200);
      expect(body).to.include("2");
      done();
    });
  });

  it("Should handle missing parameters", function (done) {
    request.get(`${baseUrl}/add?a=10`, function (error, response, body) {
      expect(response.statusCode).to.not.equal(200);
      expect(body).to.include("Error: Please provide a valid number using query parameter 'num'.");
      done();
    });
  });

  it("Should return error for non-numeric input", function (done) {
    request.get(`${baseUrl}/add?a=hello&b=world`, function (error, response, body) {
      expect(response.statusCode).to.not.equal(200);
      done();
    });
  });

  it("Checking homepage response", function (done) {
    request.get(`${baseUrl}`, function (error, response, body) {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });
});