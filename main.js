const { Blockchain, Transaction } = require('./blockchain_transaction');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const myKey = ec.keyFromPrivate('7c4c45907dec40c91bab3480c39032e90049f1a44f3e18c3e07c23e3273995cf');
const myWalletAddress = myKey.getPublic('hex');

const abhranil = new Blockchain();
abhranil.minePendingTransactions(myWalletAddress);

const tx1 = new Transaction(myWalletAddress, 'add2', 100);
tx1.sign(myKey);
abhranil.addTransaction(tx1);
abhranil.minePendingTransactions(myWalletAddress);

const tx2 = new Transaction(myWalletAddress, 'add1', 30);
tx2.sign(myKey);
abhranil.addTransaction(tx2);
abhranil.minePendingTransactions(myWalletAddress);

console.log();
console.log(`Balance of Abhranil is ${abhranil.getBalanceOfAddress(myWalletAddress)}`);

console.log();
console.log(`Balance of add1 is ${abhranil.getBalanceOfAddress('add1')}`);

console.log();
console.log('Blockchain valid?', abhranil.isChainValid() ? 'Yes' : 'No');
