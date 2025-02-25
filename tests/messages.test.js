import request from "supertest";
import app from "../app.js";

describe("Messages API", () => {
  let messageId;

  it("should create a new message", async () => {
    const response = await request(app)
      .post("/messages")
      .send({ message: "racecar" });

    expect(response.statusCode).toBe(201);
    expect(response.body.data).toHaveProperty("id");
    expect(response.body.data.is_palindrome).toBe(true);

    messageId = response.body.data.id;
  });

  it("should get all messages", async () => {
    const response = await request(app).get("/messages");

    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  it("should get a specific message", async () => {
    const response = await request(app).get(`/messages/${messageId}`);

    expect(response.statusCode).toBe(200);
    expect(response.body.id).toBe(messageId);
  });

  it("should update a message", async () => {
    const response = await request(app)
      .put(`/messages/${messageId}`)
      .send({ message: "hello" });

    expect(response.statusCode).toBe(200);
    expect(response.body.data.message).toBe("hello");
    expect(response.body.data.is_palindrome).toBe(false);
  });

  it("should delete a message", async () => {
    const response = await request(app).delete(`/messages/${messageId}`);

    expect(response.statusCode).toBe(200);
    expect(response.body.message).toContain("deleted successfully");

    const checkResponse = await request(app).get(`/messages/${messageId}`);
    expect(checkResponse.statusCode).toBe(404);
  });

  it("should return 404 for a non-existent message", async () => {
    const response = await request(app).get("/messages/nonexistent-id");
    expect(response.statusCode).toBe(404);
  });

  it("should return 400 if message is missing in POST request", async () => {
    const response = await request(app).post("/messages").send({});
    expect(response.statusCode).toBe(400);
    expect(response.body.error).toBe("Message content is required");
  });

  it("should return 404 if trying to update a non-existent message", async () => {
    const response = await request(app)
      .put("/messages/nonexistent-id")
      .send({ message: "test" });
    expect(response.statusCode).toBe(404);
  });

  it("should return 404 if trying to delete a non-existent message", async () => {
    const response = await request(app).delete("/messages/nonexistent-id");
    expect(response.statusCode).toBe(404);
  });
});
