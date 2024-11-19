import client from "@/lib/client";
/** Replace the values below with the addresses of your smart contracts. */

// 1. Set up the network your smart contracts are deployed to.
// First, import the chain from the package, then set the NETWORK variable to the chain.
import { getContract } from "thirdweb";
import { 137 } from "thirdweb/chains";
export const NETWORK = polygon;

// 2. The address of the marketplace V3 smart contract.
// Deploy your own: https://thirdweb.com/thirdweb.eth/MarketplaceV3
const MARKETPLACE_ADDRESS = "0x9A1f53A7f43114438bcB65abCFFA1CBB3d779d48";
export const MARKETPLACE = getContract({
	address: MARKETPLACE_ADDRESS,
	client,
	chain: NETWORK,
});

// 3. The address of your NFT collection smart contract.
const NFT_COLLECTION_ADDRESS = "0x328e9c77f7F1aF8f55F11ECc6219E52b3C4C24A7";
export const NFT_COLLECTION = getContract({
	address: NFT_COLLECTION_ADDRESS,
	client,
	chain: NETWORK,
});

// (Optional) Set up the URL of where users can view transactions on
// For example, below, we use Mumbai.polygonscan to view transactions on the Mumbai testnet.
export const ETHERSCAN_URL = "https://polygonscan.com";
