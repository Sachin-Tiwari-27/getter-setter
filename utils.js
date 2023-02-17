const Web3 = require('web3')

const web3 = new Web3('https://localhost:8545')

//console.log(web3)

const privatekey = '0xcf2666103f9064c4f830b27eb46ed05e8c3dcaccdffc52992276f496fdf4738b';
const myaccount  = web3.eth.accounts.wallet.add(privatekey);

console.log(myaccount)