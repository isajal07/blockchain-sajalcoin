const {Blockchain, Transaction} = require('./blockchain');

let sajalCoin = new Blockchain();

sajalCoin.createTransaction(new Transaction('address1', 'address2', 100))
sajalCoin.createTransaction(new Transaction('address2', 'address1', 50))

console.log('\n Starting the mine...');
sajalCoin.minePendingTransactions('xavi-address');

console.log('\nBalance of xavi is', sajalCoin.getBalanceOfAddress('xavi-address'));

// console.log('Mining block 1...')
// sajalCoin.addBlock(new Block(1, "03/04/2020", { amount: 4}))

// console.log('Mining block 2...')
// sajalCoin.addBlock(new Block(2, "07/04/2020", { amount: 42}))




// console.log('Is blockchain valid?', sajalCoin.isChainValid());

//console.log(JSON.stringify(sajalCoin, null, 4))