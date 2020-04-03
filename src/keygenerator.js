const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const key = ec.genKeyPair();
const publicKey = key.getPublic('hex');
const privateKey = key.getPrivate('hex');

console.log();
console.log('Private key:', privateKey)
console.log('Public key:', publicKey)

// Private key: 60a5ae557c0fe2c29f4a13143d4205d5610e67c63107442f7e07f179b0c8bb92
// Public key: 04482760d5ea7c2f11b951c1e9f752a57f5dc592dcc06f37170795ca0514f03cd84dfbbb2caf778160b62b73936a46344ac11f1840a997fc9e74f78dc34878f95e