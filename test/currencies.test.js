const app = require('../app');
const request = require("supertest");

describe("GET /currencies", () => {
  it("should return 200 currency list", async () => {
    return request(app)
      .get("/currencies")
      .expect('Content-Type', /json/)
      .expect(200)
      .then((res) => {
          expect(res.statusCode).toBe(200);
          expect(res.body).toContain({
            0: 'USD',
            1: 'EUR',
            2: 'GBP',
          });
      });
  });
});
