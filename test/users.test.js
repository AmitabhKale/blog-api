const request = require("supertest");
const bcrypt = require("bcryptjs");

const app = require("../src/app");
const User = require("../src/models/userModel");

function hashPassword(password) {
  const hash = bcrypt.hashSync(password, 8);
  return hash;
}

const user = {
  name: "Luffy",
  email: "luffy@pirates.com",
  password: hashPassword("kaizoku"),
};

beforeEach(async () => {
  await User.deleteMany();
  await new User(user).save();
});

test("Should Register a new user", async () => {
  await request(app)
    .post("/api/users/register")
    .send({
      name: "Zoro",
      email: "zoro@pirates.com",
      password: "enmasake",
    })
    .expect(201);
});

test("Should Login User existing in database", async () => {
  const res = await request(app).post("/api/users/login").send({
    email: user.email,
    password: "kaizoku",
  });

  expect(res.statusCode).toEqual(200);
  expect(res.body).toHaveProperty("token");
  expect(res.body.message).toEqual("Logged In");
});

test("Should return 401 for invalid user password", async () => {
  await request(app)
    .post("/api/users/login")
    .send({
      email: user.email,
      password: "wrongpassword",
    })
    .expect(401);
});
