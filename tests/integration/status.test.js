test("Teste endpoint status", async () => {
  response = await fetch("http://localhost:3000/api/status");
  expect(response.status).toBe(200);
});
