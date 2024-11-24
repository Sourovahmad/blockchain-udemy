const assert = require("assert");
const ganache = require("ganache");
const { Web3 } = require("web3");
const web3 = new Web3(ganache.provider()); // provider connect application with web3
const { interface, bytecode } = require("../compile");

let accounts;
let inbox;
let updatedMessage;

beforeEach(async () => {
  accounts = await web3.eth.getAccounts();

  inbox = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode, arguments: ["Hi there"] })
    .send({ from: accounts[0], gas: "1000000" });



});

describe("inbox", () => {

  it("has deployed", () => {
    assert.ok(inbox.options.address);
  });


  it("set message", async () =>{
      const updatedMessageHash = await inbox.methods.setMessage("a new message").call();
      console.log("new messge hash", updatedMessageHash);
  })


  it("sets and verifies message", async () => {
    await inbox.methods.setMessage("a new message").send({ from: accounts[0] });
    
    const message = await inbox.methods.message().call();
    
    assert.equal(message, "a new hhhkhkhkj");
  });

  

});
