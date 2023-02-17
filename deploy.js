const {web3, myAccount} = require('./utils')
const {bytecode} = require('./Contract Artifact')


async function deploy () {

    await web3.eth.sendTransaction({
        from: myAccount.address,
        gas: 80000,
        data: bytecode
    })

    .on('receipt', console.log )
    
}

deploy()
