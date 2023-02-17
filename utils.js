const Web3 = require('Web3')

const web3 = new Web3('http://localhost:8545')

//console.log(web3)

const privatekey = '0x45d5366ed0c35d2c9822f939db5705b751caf064714dc951c2c210dcfd61a354';
const myAccount  = web3.eth.accounts.wallet.add(privatekey);

//console.log(myAccount)

module.exports = {
    web3 : web3,
    myAccount : myAccount
}