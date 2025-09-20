const request = require("supertest");

const app = require("../src/app");

test("Should Register a new user", async () => {
  await request(app)
    .post("/api/users/register")
    .send({
      name: "Luffy",
      email: "luffy@priates.com",
      password: "nikuniku",
    })
    .expect(201);
});
