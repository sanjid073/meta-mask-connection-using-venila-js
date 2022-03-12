
const ethereumButton = document.querySelector(".enableEthereumButton");
const showAccount = document.querySelector(".showAccount");
const showBalance = document.querySelector(".showBalance");

ethereumButton.addEventListener("click", () => {
  getAccount();
});

async function getAccount() {
  const accounts = await ethereum.request({
    method: "eth_requestAccounts",
  });
  const account = accounts[0];
  showAccount.innerHTML = account;
  getBalace(account);
}
async function getBalace(account) {
    const balances = await ethereum.request({
      method: "eth_getBalance",
     params: [account, 'latest']
    });
    
    const balance = balances[0];
    showBalance.innerHTML = balance;

    console.log("click on black function");
   
  }
