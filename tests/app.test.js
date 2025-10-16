const request = require("supertest");
const server = require("../index"); // import the exported server

describe("Basic API Tests", () => {

  // ✅ Test 1: Correct
  test("GET / should return hello message", async () => {
    const res = await request(server).get("/");
    expect(res.statusCode).toBe(200);
    expect(res.text).toContain("Hello");
  });

  // ✅ Test 2: Correct
  test("GET /status should return running state", async () => {
    const res = await request(server).get("/status");
    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe("running");
  });

  // ❌ Test 3: Faulty / will fail
  test("GET /status should return version 2.0", async () => {
    const res = await request(server).get("/status");
    expect(res.statusCode).toBe(200);
    expect(res.body.version).toBe("2.0"); // ❌ Your app returns "1.0"
  });

});

// Close the server after all tests
afterAll(() => {
  server.close();
});
