import { ethers } from "hardhat";

async function main() {
   const BridgeNFT = await ethers.getContractFactory("BridgeNFT");
  const bridgeNft =  await BridgeNFT.deploy("BridgeNft", "BNFT")
  await  bridgeNft.deployed();
  console.log("contract deployed sucessfully", bridgeNft.address)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});


//contractAddress:  0xb6798f8CaFA383C855B2db45ce