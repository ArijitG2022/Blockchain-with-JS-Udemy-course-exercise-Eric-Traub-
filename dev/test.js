const Blockchain = require('./blockchain');
const bitcoin = new Blockchain();


const bc1 = {
"chain": [
{
"index": 1,
"timestamp": 1645618085650,
"transactions": [],
"nonce": 555,
"hash": "0",
"previousBlockHash": "0"
},
{
"index": 2,
"timestamp": 1645618118783,
"transactions": [],
"nonce": 18140,
"hash": "0000b9135b054d1131392c9eb9d03b0111d4b516824a03c35639e12858912100",
"previousBlockHash": "0"
},
{
"index": 3,
"timestamp": 1645618178661,
"transactions": [
{
"amount": 6.25,
"sender": "00",
"recipient": "41d0ef2094a111ec99d879f8dd580f06",
"transactionID": "55992c7094a111ec99d879f8dd580f06"
},
{
"amount": 10,
"sender": "J31JL31JSD161N1GF",
"recipient": "OO2O2OF1WW2W2W2W61B",
"transactionID": "6bd1f49094a111ec99d879f8dd580f06"
},
{
"amount": 20,
"sender": "J31JL31JSD161N1GF",
"recipient": "OO2O2OF1WW2W2W2W61B",
"transactionID": "7082ab6094a111ec99d879f8dd580f06"
},
{
"amount": 30,
"sender": "J31JL31JSD161N1GF",
"recipient": "OO2O2OF1WW2W2W2W61B",
"transactionID": "74df27b094a111ec99d879f8dd580f06"
}
],
"nonce": 14493,
"hash": "00007f7eb399714a209e3660df7e1461a8891b0b6e221c6d5edcafd27cc7f410",
"previousBlockHash": "0000b9135b054d1131392c9eb9d03b0111d4b516824a03c35639e12858912100"
},
{
"index": 4,
"timestamp": 1645618283002,
"transactions": [
{
"amount": 6.25,
"sender": "00",
"recipient": "41d0ef2094a111ec99d879f8dd580f06",
"transactionID": "794233b094a111ec99d879f8dd580f06"
},
{
"amount": 40,
"sender": "J31JL31JSD161N1GF",
"recipient": "OO2O2OF1WW2W2W2W61B",
"transactionID": "a2d3123094a111ec99d879f8dd580f06"
},
{
"amount": 50,
"sender": "J31JL31JSD161N1GF",
"recipient": "OO2O2OF1WW2W2W2W61B",
"transactionID": "a62d39b094a111ec99d879f8dd580f06"
},
{
"amount": 60,
"sender": "J31JL31JSD161N1GF",
"recipient": "OO2O2OF1WW2W2W2W61B",
"transactionID": "a8fd49a094a111ec99d879f8dd580f06"
},
{
"amount": 70,
"sender": "J31JL31JSD161N1GF",
"recipient": "OO2O2OF1WW2W2W2W61B",
"transactionID": "ac3da79094a111ec99d879f8dd580f06"
}
],
"nonce": 294646,
"hash": "00004f5f196b65fa9f834839d26cfbd15e423f17ddb89a91636bf910ae361f16",
"previousBlockHash": "00007f7eb399714a209e3660df7e1461a8891b0b6e221c6d5edcafd27cc7f410"
}
],
"pendingTransactions": [
{
"amount": 6.25,
"sender": "00",
"recipient": "41d0ef2094a111ec99d879f8dd580f06",
"transactionID": "b773600094a111ec99d879f8dd580f06"
}
],
"currentNodeUrl": "http://localhost:3001",
"networkNodes": []
};

console.log('VALID:',bitcoin.chainIsValid(bc1.chain));