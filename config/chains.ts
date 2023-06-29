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
  shardeumsphinxdapp1: {
    name: 'shardeumsphinxdapp1',
    chainId: 8081,
    nativeToken: {
      name: 'shardeum',
      symbol: 'SHM',
      decimals: 18,
    },
    publicRpcUrls: [
      {
        http: 'https://dapps.shardeum.org/',
      },
    ],
    blockExplorers: [
      {
        name: 'Shardeum Explorer',
        url: 'https://explorer-dapps.shardeum.org',
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
  testnet5irechain: {
    name: 'testnet5irechain',
    chainId: 997,
    nativeToken: {
      name: '5ire',
      symbol: '5ire',
      decimals: 18,
    },
    publicRpcUrls: [
      {
        http: 'https://rpc-testnet.5ire.network',
      },
    ],
    blockExplorers: [
      {
        name: '5IRE EVM BLOCKCHAIN EXPLORER',
        url: 'https://explorer.5ire.network',
      },
    ],
    isTestnet: true,
  },
  scrollalphatestnet: {
    name: 'scrollalphatestnet',
    chainId: 534353,
    nativeToken: {
      name: 'ETH',
      symbol: 'ETH',
      decimals: 18,
    },
    publicRpcUrls: [
      {
        http: 'https://alpha-rpc.scroll.io/l2',
      },
    ],
    blockExplorers: [
      {
        name: 'Scroll Alpha Blockscout',
        url: 'https://blockscout.scroll.io',
      },
    ],
    isTestnet: true,
  },
};
