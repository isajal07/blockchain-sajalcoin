const {Blockchain, Transaction} = require('./blockchain');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const myKey = ec.keyFromPrivate('60a5ae557c0fe2c29f4a13143d4205d5610e67c63107442f7e07f179b0c8bb92');
const myWalletAddress = myKey.getPublic('hex');


let sajalCoin = new Blockchain();

const tx1 = new Transaction(myWalletAddress, 'public key goes here', 10);
tx1.signTransaction(myKey);
sajalCoin.addTransaction(tx1);

sajalCoin.createTransaction(new Transaction('address1', 'address2', 100))
sajalCoin.createTransaction(new Transaction('address2', 'address1', 50))

console.log('\n Starting the mine...');
sajalCoin.minePendingTransactions('xavi-address');

console.log('\nBalance of xavi is', sajalCoin.getBalanceOfAddress(myWalletAddress));

sajalCoin.chain[1].transaction[0].amount = 1;

// console.log('Mining block 1...')
// sajalCoin.addBlock(new Block(1, "03/04/2020", { amount: 4}))

// console.log('Mining block 2...')
// sajalCoin.addBlock(new Block(2, "07/04/2020", { amount: 42}))

console.log('Is blockchain valid?', sajalCoin.isChainValid());

//console.log(JSON.stringify(sajalCoin, null, 4))