export function generateUniqueCustomer(overrides = {}) {
  const uniq = Date.now() + Math.floor(Math.random() * 1000);
  return {
    firstName: `fname${uniq}`,
    lastName: `lname${uniq}`,
    postCode: '1234',
    ...overrides,
  };
}