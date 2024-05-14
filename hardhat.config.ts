import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

// 在配置文件中引用，
// 需要单独安装：npm install dotenv
require('dotenv').config()

// let ALCHEMY_KEY = process.env.ALCHEMY_KEY || ''
let INFURA_KEY = "18e65d64b41c46ff859360c15388cbcb"
// let INFURA_KEY = process.env.INFURA_KEY || ''
// let PRIVATE_KEY = process.env.PRIVATE_KEY || ''
let PRIVATE_KEY = "8913902dbc4fb6f07ed48f05e171c36d4acf2c104ec8acab42f94d0f0273449a"
// let ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY || ''
let ETHERSCAN_API_KEY = "MWN7ESTK7NPMHHPHNN8GW7MMBSNYCEHC3U"
// console.log(ALCHEMY_KEY);
console.log(INFURA_KEY);
console.log(PRIVATE_KEY);
console.log(ETHERSCAN_API_KEY);

const config: HardhatUserConfig = {
    // solidity: "0.8.9",
    // 配置网络 kovan, bsc, mainnet
    networks: {
        hardhat: {
        },
          // 配置goerli网络
        sepolia: {
            url: `https://sepolia.infura.io/v3/${INFURA_KEY}`,
            accounts: [PRIVATE_KEY]
        },
        // kovan: {
        //     url: `https://kovan.infura.io/v3/${INFURA_KEY}`,
        //     accounts: [PRIVATE_KEY]
        // }
    },
    // 配置自动化verify相关
    etherscan: {
        apiKey: {
          sepolia: ETHERSCAN_API_KEY
        }
    },
    // 配置编译器版本
    solidity: {
        version: "0.8.24",
        settings: {
            optimizer: {
                enabled: true,
                runs: 200
            }
        }
    },
};

export default config;