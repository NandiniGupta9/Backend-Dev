const request = require("supertest");
const app = require("../src/app");

describe("Auth Tests", () => {
  test("should register user", async () => {
    const res = await request(app)
      .post("/auth/register")
      .send({ username: "test", password: "1234" });

    expect(res.statusCode).toBe(200);
  });
});