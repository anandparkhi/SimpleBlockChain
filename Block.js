const SHA256 = require('crypto-js/sha256');

class Block {
    constructor(data, previousHash){
    this.data = data;
    this.previousHash = previousHash;
    }

    toHash() {
        const hash = SHA256(this.data+this.previousHash);
        return hash; // a hash!
    }

}

module.exports = Block;
