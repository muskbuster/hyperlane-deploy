import { ChainMap, ChainMetadata } from '@hyperlane-xyz/sdk';

// A map of chain names to ChainMetadata
export const chains: ChainMap<ChainMetadata> = {
  // ----------- Your chains here -----------------
  polygonzkevmtestnet: {
    name: 'polygonzkevmtestnet',
    chainId: 1442,
    nativeToken: {
      name: 'ether',
      symbol: 'ETH',
      decimals: 18,
    },
    publicRpcUrls: [
      {
        http: 'https://rpc.public.zkevm-test.net',
      },
    ],
    blockExplorers: [
      {
        name: 'Polygon Scan',
        url: 'https://testnet-zkevm.polygonscan.com',
      },
    ],
    isTestnet: true,
  },
  shardeumsphinx1: {
    name: 'shardeumsphinx1',
    chainId: 8082,
    nativeToken: {
      name: 'shardeum',
      symbol: 'SHM',
      decimals: 18,
    },
    publicRpcUrls: [
      {
        http: 'https://sphinx.shardeum.org',
      },
    ],
    blockExplorers: [
      {
        name: 'Shardeum Explorer',
        url: 'https://explorer-sphinx.shardeum.org',
      },
    ],
    isTestnet: true,
  },
  chiado: {
    name: 'chiado',
    chainId: 10200,
    nativeToken: {
      name: 'Chiado',
      symbol: 'XDAI',
      decimals: 18,
    },
    publicRpcUrls: [
      {
        http: 'https://rpc.chiadochain.net',
      },
    ],
    blockExplorers: [
      {
        name: 'Blockscout',
        url: 'https://blockscout.com/gnosis/chiado',
      },
    ],
    isTestnet: true,
  },
  filecoincalibrationtestnet: {
    name: 'filecoincalibrationtestnet',
    chainId: 314159,
    nativeToken: {
      name: 'Chiado',
      symbol: 'tFIL',
      decimals: 18,
    },
    publicRpcUrls: [
      {
        http: 'https://filecoin-calibration.chainup.net/rpc/v1',
      },
    ],
    blockExplorers: [
      {
        name: 'Filscan',
        url: 'https://calibration.filscan.io',
      },
    ],
    isTestnet: true,
  },
};
