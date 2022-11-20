import CollectionConfigInterface from '../lib/CollectionConfigInterface';
import * as Networks from '../lib/Networks';
import * as Marketplaces from '../lib/Marketplaces';
import whitelistAddresses from './whitelist.json';

const CollectionConfig: CollectionConfigInterface = {
  testnet: Networks.ethereumTestnet,
  mainnet: Networks.ethereumMainnet,
  // The contract name can be updated using the following command:
  // yarn rename-contract NEW_CONTRACT_NAME
  // Please DO NOT change it manually!
  contractName: 'BentleyBae',
  tokenName: 'BentleyBae',
  tokenSymbol: 'BB',
  hiddenMetadataUri: 'ipfs://QmWcvnNZq3UK8eWzoP9ZXFg7t3pJMPc4kMVjP7qSTYNBcc/Hidden.json',
  maxSupply: 10000,
  whitelistSale: {
    price: 0,
    maxMintAmountPerTx: 1,
  },
  preSale: {
    price: 0,
    maxMintAmountPerTx: 2,
  },
  publicSale: {
    price: 0.111,
    maxMintAmountPerTx: 3,
  },
  contractAddress: null,
  marketplaceIdentifier: 'my-nft-token',
  marketplaceConfig: Marketplaces.openSea,
  whitelistAddresses,
};

export default CollectionConfig;
