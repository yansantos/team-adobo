const app = require('../app');
const request = require("supertest");

describe("GET /currencies/:code", () => {
  it("should return 200 currency details for supported currency", async () => {
    return request(app)
      .get("/currencies/USD")
      .expect('Content-Type', /json/)
      .expect(200)
      .then((res) => {
        console.log(res);
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
  it("should return 404 details for non-supported currency", async () => {
    return request(app)
      .get("/currencies/ZXC")
      .expect('Content-Type', /json/)
      .expect(404)
      .then((res) => {
          expect(res.statusCode).toBe(404);
      });
  });
});
