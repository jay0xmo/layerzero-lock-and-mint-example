import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomicfoundation/hardhat-foundry";
import "hardhat-deploy";


const config: HardhatUserConfig = {
  solidity: "0.8.18",
};

export default config;
