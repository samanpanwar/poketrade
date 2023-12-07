import { ThirdwebSDK } from "@thirdweb-dev/sdk"

import dotenv from "dotenv";
dotenv.config();

(async () => {
    const sdk = ThirdwebSDK.fromPrivateKey(
        process.env.PRIVATE_KEY, // Your wallet's private key (only required for write operations)
        "mumbai",
        {
          clientId: "", // Use client id if using on the client side, get it from dashboard settings
          secretKey: "", // Use secret key if using on the server, get it from dashboard settings
        },
      );
    

    const packAddress = ""; // Use the pack smartcontract address from ThirdWeb
    const cardAddress = ""; // Use the Pokemon Card smartcontract from ThirdWeb

    const pack = sdk.getContract(packAddress, "pack");

    const card = sdk.getContract(cardAddress, "edition");
    await (await card).setApprovalForAll(packAddress, true);
    console.log("Approved card contract to transfer cards to pack contract");

    const packImage = "ipfs://QmcycS85uEroaeyTvcsg6hLpS1wzvjjJNRKKvtz4UdV8oE/tradingcardpack.png";

    console.log("Creating pack");
    const createPacks = (await pack).create({
        packMetadata: {
            name: "Pack 2",
            description: "A new card pack",
            image: packImage,
        },
        erc1155Rewards: [
            {
                contractAddress: cardAddress,
                tokenId: 15,
                quantityPerReward: 1,
                totalRewards: 25,
            },
            {
                contractAddress: cardAddress,
                tokenId: 16,
                quantityPerReward: 1,
                totalRewards: 10,
            },
            {
                contractAddress: cardAddress,
                tokenId: 17,
                quantityPerReward: 1,
                totalRewards: 3,
            },
            {
                contractAddress: cardAddress,
                tokenId: 18,
                quantityPerReward: 1,
                totalRewards: 25,
            },
            {
                contractAddress: cardAddress,
                tokenId: 19,
                quantityPerReward: 1,
                totalRewards: 10,
            },
            {
                contractAddress: cardAddress,
                tokenId: 20,
                quantityPerReward: 1,
                totalRewards: 3,
            },
            {
                contractAddress: cardAddress,
                tokenId: 21,
                quantityPerReward: 1,
                totalRewards: 25,
            },
            {
                contractAddress: cardAddress,
                tokenId: 22,
                quantityPerReward: 1,
                totalRewards: 10,
            },
            {
                contractAddress: cardAddress,
                tokenId: 23,
                quantityPerReward: 1,
                totalRewards: 3,
            },
            {
                contractAddress: cardAddress,
                tokenId: 24,
                quantityPerReward: 1,
                totalRewards: 25,
            },
            {
                contractAddress: cardAddress,
                tokenId: 25,
                quantityPerReward: 1,
                totalRewards: 10,
            },
            {
                contractAddress: cardAddress,
                tokenId: 26,
                quantityPerReward: 1,
                totalRewards: 3,
            },
            {
                contractAddress: cardAddress,
                tokenId: 27,
                quantityPerReward: 1,
                totalRewards: 25,
            },
            {
                contractAddress: cardAddress,
                tokenId: 28,
                quantityPerReward: 1,
                totalRewards: 10,
            },
            {
                contractAddress: cardAddress,
                tokenId: 29,
                quantityPerReward: 1,
                totalRewards: 3,
            },
        ],
        rewardsPerPack: 5,
    });

    console.log("Packs created");
})();
