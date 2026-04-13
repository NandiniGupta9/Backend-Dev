test("product search works", async () => {
  const res = await request(app).get("/products/search?q=phone");
  expect(res.statusCode).toBe(200);
});