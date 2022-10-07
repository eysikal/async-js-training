function retrievePassword(callback) {
  // Run imaginary logic to fetch password
  var password = 'this-is-my-password';
  callback(password);
}

function logInToBank(password, callback) {
  // Run imaginary logic to log in
  var loginStatus = 'success';
  if (loginStatus === 'success') {
    callback();
  }
}

function loadDashboard(callback) {
  // Run imaginary logic to get dashboard
  callback();
}

function getBankBalance(callback) {
  // Run imaginary logic to fetch balance
  var balance = '$12,465';
  callback(balance);
}

retrievePassword(function (password) {
  logInToBank(password, function () {
    loadDashboard(function () {
      getBankBalance(function (balance) {
        console.log(`Here is your balance: ${balance}`);
      });
    });
  });
});
