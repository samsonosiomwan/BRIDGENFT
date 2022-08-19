import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

require('dotenv').config()
const config: HardhatUserConfig = {
  solidity: "0.8.9",
  defaultNetwork:"rinkeby",
  networks:{
    rinkeby:{
      url:`${process.env.ALCHEMY_URL}`,
      accounts:[`${process.env.PRIVATE_KEY}`]
    }
  }
};

//contract address:  0xb6798f8CaFA383C855B2db45cec1BE6b9aD24f77

export default config;
