import { ThirdwebSDK } from "@thirdweb-dev/sdk"

import dotenv from "dotenv";
dotenv.config();

(async () => {
    const sdk = ThirdwebSDK.fromPrivateKey(
        process.env.PRIVATE_KEY, // Your wallet's private key (only required for write operations)
        "mumbai",
        {
          clientId: "1f5102bd37642e9024d4462378c4eff2", // Use client id if using on the client side, get it from dashboard settings
          secretKey: "J6VeiPNwT2HI1syWCbkk4vjMGNxPij57xzDsUt-NxRfbvN3A-SYc0gJFANDMvEZwDfIcbSArT6QtoNmuSaSHOA", // Use secret key if using on the server, get it from dashboard settings
        },
      );
    

    const packAddress = "0x7cE55aDEFe2c483cEEc571B13042eD6b73faE2cD";
    const cardAddress = "0x90E3B6d251f6d5b9db666AbdcEe69B90eA789F10";

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