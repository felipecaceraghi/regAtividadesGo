test("Teste endpoint users", async () => {
  response = await fetch("http://localhost:3000/api/users");
  expect(response.status).toBe(200);
});
