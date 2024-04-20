const Block = require('./Block');

class Blockchain {
    constructor() {
        this.chain = [ /* TODO: Create the genesis block here */ myBlock ] ;
    }
    addBlock(block){
        const previousHash = this.chain[this.chain.length-1].toHash();
        block.previousHash = previousHash;
        this.chain.push(block);
    }
    isValid() { 
        for(let i=1;i<this.chain.length;i++){
            const hashprev= this.chain[i-1].toHash();
            const hashcurr = this.chain[i].previousHash; 
            if(hashprev.toString()!==hashcurr.toString()){
                return false; 
            }
        }
        return true;
    }
}

const myBlock = new Block("On my way to become the best WEB 3 Developer");
const blockchain = new Blockchain();
blockchain.addBlock(myBlock);
 
module.exports = Blockchain;
