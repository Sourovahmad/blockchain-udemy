const assert = require('assert');
const ganache = require('ganache');
const { Web3 } = require('web3');
const web3 = new Web3(ganache.provider()); // provider connect application with web3




class Car {
    park(){
        return "parked"    
    }

    run (){
        return "running"
    }
}


let car;

// beforeEach(() => {
//     car = new Car;
// });

// describe("car", ()=> {

//     it('can park', () =>{
//         assert.equal(car.park(), "parked");
//     });

//     it('can run', () =>{
//         assert.equal(car.run(), "running");
//     });


// })