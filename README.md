# SimpleBlockChain

## Overview

SimpleBlockChain is a JavaScript-based project designed to illustrate the basic principles of blockchain technology. It provides a foundational understanding of how individual blocks are created, secured with cryptographic hashes, and connected to form a blockchain. This tutorial covers the creation of blocks, the addition of transaction data, the establishment of links between blocks using their hashes, and validation of the blockchain's integrity.

## Features

- **Block Structure**: A `Block` class that encapsulates transaction data and the hash of the previous block, demonstrating the data structure of a blockchain.
- **SHA256 Hashing**: Usage of the SHA256 cryptographic hash function from the Crypto JS Library to generate a unique hash for each block.
- **Genesis Block**: Implementation of the blockchain's first block, known as the Genesis Block, in the blockchain's constructor.
- **Adding Blocks**: A method for adding new blocks with transaction data to the blockchain, showing how the chain grows.
- **Chain Linking**: Linking blocks by storing the hash of the previous block and including it in the next block's hash calculation.
- **Chain Validation**: A validation function to verify the integrity of the blockchain, ensuring that any tampering with the data is detected.

## Quick Start

To get started with SimpleBlockChain, you need to have Node.js installed on your system.

1. Clone this repository.
2. Run `npm install` to install the dependencies.
3. Create your first block using the `Block` class and add it to the blockchain.
4. Validate the integrity of the blockchain at any point using the `isValid` method.

## Usage

The project is divided into two main files:

- `Block.js`: Contains the `Block` class definition with methods to calculate a block's hash.
- `Blockchain.js`: Contains the `Blockchain` class definition, methods for adding blocks, and the validation logic.

Example usage:

```javascript
const Blockchain = require('./Blockchain');
const Block = require('./Block');

const myBlockchain = new Blockchain();
myBlockchain.addBlock(new Block("Transaction Data Here"));
console.log(myBlockchain.isValid()); // Should return true
