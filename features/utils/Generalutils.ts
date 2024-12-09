export function generateRandomEmail(): string {
    // Create a random string of alphanumeric characters
    const randomString = Math.random().toString(36).substring(2, 15);
    // Generate a random email with the random string
    const email = `${randomString}@example.com`;
    return email;
  }