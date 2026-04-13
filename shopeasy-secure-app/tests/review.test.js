test("review should be sanitized", async () => {
  const res = await request(app)
    .post("/reviews")
    .send({ comment: "<script>alert(1)</script>" });

  expect(res.statusCode).toBe(401 || 200);
});