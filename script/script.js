// Login page

const loginBtn = document.getElementById("login");
loginBtn.addEventListener("click", function () {
  const loginPageHide = document.getElementById("login-page");
  loginPageHide.style.display = "none";
  document.getElementById("user-dashboard").style.display = "block";
});

// User Dashboard

// Deposit

const depositBtn = document.getElementById("deposit-btn");
depositBtn.addEventListener("click", function () {
  const depositAmount = document.getElementById("deposit-amount").value;
  const depositNumber = parseFloat(depositAmount);

  const currentDeposit = document.getElementById("current-deposit").innerText;
  const currentDepositNumber = parseFloat(currentDeposit);
  const totalDeposit = currentDepositNumber + depositNumber;

  document.getElementById("current-deposit").innerText = totalDeposit;
  document.getElementById("deposit-amount").value = "";

  const currentBalance = document.getElementById("current-balance").innerText;
  const currentBalanceNumber = parseFloat(currentBalance);
  const totalBalance = currentBalanceNumber + depositNumber;

  document.getElementById("current-balance").innerText = totalBalance;
});

// Withdraw

const withdrawBtn = document.getElementById("withdraw-btn");
withdrawBtn.addEventListener("click", function () {
  const withdrawAmount = document.getElementById("withdraw-amount").value;
  const withdrawNumber = parseFloat(withdrawAmount);

  const currentWithdraw = document.getElementById("current-withdraw").innerText;
  const currentWithdrawNumber = parseFloat(currentWithdraw);
  const totalWithdraw = currentWithdrawNumber + withdrawNumber;

  document.getElementById("current-withdraw").innerText = totalWithdraw;

  const currentBalance = document.getElementById("current-balance").innerText;
  const currentBalanceNumber = parseFloat(currentBalance);
  const totalBalance = currentBalanceNumber - withdrawNumber;

  document.getElementById("current-balance").innerText = totalBalance;
  document.getElementById("withdraw-amount").value = "";
});
