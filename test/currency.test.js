const app = require('../app');
const request = require("supertest");

describe("GET /currencies/:code", () => {
  it("should return 200 status code and currency details for supported currency", async () => {
    return request(app)
      .get("/currencies/USD")
      .expect('Content-Type', /json/)
      .expect(200)
      .then((res) => {
          expect(res.statusCode).toBe(200);
          expect(res.body).toStrictEqual({
            name: 'US Dollar',
            symbol: '$',
            code: 'USD',
          });
      });
  });
});

describe("GET /currencies/:code", () => {
  it("should return 404 status code and currency details for non-supported currency", async () => {
    return request(app)
      .get("/currencies/ZXC")
      .expect('Content-Type', /html/)
      .expect(404)
      .then((res) => {
          expect(res.statusCode).toBe(404);
      });
  });
});
