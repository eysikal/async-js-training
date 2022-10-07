function retrievePassword() {
  // Run imaginary logic to fetch password
  return Promise.resolve('this-is-my-password');
}

function logInToBank(password) {
  return new Promise((resolve, reject) => {
    // Run imaginary logic to log in
    const loginStatus = 'success';
    if (loginStatus === 'success') {
      resolve();
    }
    reject('Failed to log in!');
  });
}

function loadDashboard() {
  // Run imaginary logic to get dashboard
  return Promise.resolve();
}

function getBankBalance() {
  // Run imaginary logic to fetch balance
  return Promise.resolve('$12,465');
}

retrievePassword()
  .then((password) => logInToBank(password))
  .then(loadDashboard)
  .then(getBankBalance)
  .then((balance) => console.log(`Here is your balance: ${balance}`))
  .catch();
