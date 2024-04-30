/**
 * @type import('hardhat/config').HardhatUserConfig
 */
require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ganache");
require("@openzeppelin/hardhat-upgrades");
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");
require("dotenv").config();

module.exports = {
    solidity: {
        compilers: [
            {
                version: "0.8.17",
                settings: {
                    optimizer: {
                        enabled: true,
                        runs: 200,
                    },
                },
            },
        ],
    },
    networks: {
        bsc_test: {
            url: "https://data-seed-prebsc-1-s1.binance.org:8545",
            accounts: [process.env.PRIVATE_KEY],
        },
        bsc_main: {
            url: "https://bsc-dataseed.binance.org/",
            accounts: [process.env.PRIVATE_KEY],
        },
        eth_goerli: {
            url: "https://goerli.infura.io/v3/" + process.env.INFURA_KEY,
            accounts: [process.env.PRIVATE_KEY],
        },
        eth_main: {
            url: "https://mainnet.infura.io/v3/" + process.env.INFURA_KEY,
            accounts: [process.env.PRIVATE_KEY],
        }
    },
    mocha: {
        timeout: 1000000000,
    },
    etherscan: {
        apiKey: process.env.ETHERSCAN_API_KEY,
    }
};
