async function retrievePassword() {
  // Run imaginary logic to fetch password
  return 'this-is-my-password';
}

async function logInToBank(password) {
  // Run imaginary logic to log in
  const loginStatus = 'success';
  if (loginStatus === 'success') {
    return;
  }
  throw new Error('login failed!');
}

async function loadDashboard() {
  // Run imaginary logic to get dashboard
  return;
}

async function getBankBalance() {
  // Run imaginary logic to fetch balance
  return '$12,465';
}

async function main() {
  const password = await retrievePassword();
  await logInToBank(password);
  await loadDashboard();
  const balance = await getBankBalance();

  console.log(`Here is your balance: ${balance}`);
}

main();
