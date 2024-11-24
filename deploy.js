const HDWallet = require("@truffle/hdwallet-provider"); 
const { Web3 } = require("web3");
const { interface, bytecode } = require("./compile");
require('dotenv').config();

const account_phrase = process.env.ACCOUNT_PHRASE;
const sepolia_url = process.env.SEPOLIA_URL;
const provider = new HDWallet(
    account_phrase,
    sepolia_url
)
const web3 = new Web3(provider);
let accounts;


async function deply(){
     accounts = await web3.eth.getAccounts();
     console.log("attempting to deploy from account ", accounts[0]);


     // deploy to the blockchain 

    const deployResult = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({data:bytecode, arguments: ["hello contract"]})
    .send({from: accounts[0], gas:"1000000"});


    console.log("deployed address", deployResult.options.address);
    provider.engine.stop();
}

deply();