require("dotenv").config()



const {createAlchemyWeb3} = require("@alch/alchemy-web3");
const web3 = createAlchemyWeb3(process.env.ALCHEMY_URL);

const contract = require("../artifacts/contracts/BridgeNFT.sol/BridgeNFT.json");

const contractAddress = "0xb6798f8CaFA383C855B2db45cec1BE6b9aD24f77";

const bridgeNft = new web3.eth.Contract(contract.abi, contractAddress);

async function mintBridgeNFT(tokenURI){
     const nonce = await web3.eth.getTransactionCount(process.env.ADDRESS, "latest")

     const tx = {
         "from": process.env.ADDRESS,
         "to": contractAddress,
         "nonce": nonce,
         "gas": 500000,
         "maxPriorityFeePerGas": 19999999987,
         "data": bridgeNft.methods.mintNFT(process.env.ADDRESS, tokenURI).encodeABI()
     };

     const signedTx = await web3.eth.accounts.signTransaction(tx, process.env.PRIVATE_KEY)
     const transactionReceipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction)

     console.log(`Transaction receipt: ${JSON.stringify(transactionReceipt)}`)

}

// mintBridgeNFT("https://gateway.pinata.cloud/ipfs/QmS77m9AcAE36yDsDcif3qJFGZB2zUMTycYMAaffi3R5zH");
mintBridgeNFT("https://gateway.pinata.cloud/ipfs/QmXqzvimuxeHHMEk4DpPSpymNoPsXowTgGmFq36HsDMLWb")
// open see URL: https://testnets.opensea.io/account?tab=created