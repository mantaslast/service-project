test('Should add two numbers', async () => {
  const add = (a: number, b: number): number => {
    return a + b;
  };
  expect(add(1, 2)).toBe(3);
});
