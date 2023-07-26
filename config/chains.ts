import { ChainMap, ChainMetadata, ProtocolType } from '@hyperlane-xyz/sdk';

// import { chainMetadata } from '@hyperlane-xyz/sdk';
// A map of chain names to ChainMetadata
export const chains: ChainMap<ChainMetadata> = {
  // ----------- Your chains here -----------------
  polygonzkevmtestnet: {
    name: 'polygonzkevmtestnet',
    chainId: 1442,
    protocol: ProtocolType.Ethereum,
    nativeToken: {
      name: 'ether',
      symbol: 'ETH',
      decimals: 18,
    },
    rpcUrls: [
      {
        http: 'https://rpc.public.zkevm-test.net',
      },
    ],
    blockExplorers: [
      {
        name: 'Polygon Scan',
        url: 'https://testnet-zkevm.polygonscan.com',
        apiUrl: 'https://api-zkevm.polygonscan.com/api',
      },
    ],
    isTestnet: true,
  },
  shardeumsphinxdapp1: {
    name: 'shardeumsphinxdapp1',
    chainId: 8081,
        protocol: ProtocolType.Ethereum,

    nativeToken: {
      name: 'shardeum',
      symbol: 'SHM',
      decimals: 18,
    },
    rpcUrls: [
      {
        http: 'https://dapps.shardeum.org/',
      },
    ],
    blockExplorers: [
      {
        name: 'Shardeum Explorer',
        url: 'https://explorer-dapps.shardeum.org'
      },
    ],
    isTestnet: true,
  },
  chiado: {
    name: 'chiado',
    chainId: 10200,
        protocol: ProtocolType.Ethereum,

    nativeToken: {
      name: 'Chiado',
      symbol: 'XDAI',
      decimals: 18,
    },
    rpcUrls: [
      {
        http: 'https://rpc.chiadochain.net',
      },
    ],
    blockExplorers: [
      {
        name: 'Blockscout',
        url: 'https://gnosis-chiado.blockscout.com',
        apiUrl: 'https://gnosis-chiado.blockscout.com/api'
      },
    ],
    isTestnet: true,
  },
  // filecoincalibrationtestnet: {
  //   name: 'filecoincalibrationtestnet',
  //   chainId: 314159,
  //       protocol: ProtocolType.Ethereum,

  //   nativeToken: {
  //     name: 'Chiado',
  //     symbol: 'tFIL',
  //     decimals: 18,
  //   },
  //   rpcUrls: [
  //     {
  //       http: 'https://filecoin-calibration.chainup.net/rpc/v1',
  //     },
  //   ],
  //   blockExplorers: [
  //     {
  //       name: 'Filscan',
  //       url: 'https://calibration.filscan.io',
  //     },
  //   ],
  //   isTestnet: true,
  // },
  // testnet5irechain: {
  //   name: 'testnet5irechain',
  //   chainId: 997,
  //       protocol: ProtocolType.Ethereum,

  //   nativeToken: {
  //     name: '5ire',
  //     symbol: '5ire',
  //     decimals: 18,
  //   },
  //   rpcUrls: [
  //     {
  //       http: 'https://rpc-testnet.5ire.network',
  //     },
  //   ],
  //   blockExplorers: [
  //     {
  //       name: '5IRE EVM BLOCKCHAIN EXPLORER',
  //       url: 'https://explorer.5ire.network',
  //     },
  //   ],
  //   isTestnet: true,
  // },
  scrollalphatestnet: {
    name: 'scrollalphatestnet',
    chainId: 534353,
        protocol: ProtocolType.Ethereum,

    nativeToken: {
      name: 'ETH',
      symbol: 'ETH',
      decimals: 18,
    },
    rpcUrls: [
      {
        http: 'https://alpha-rpc.scroll.io/l2',
      },
    ],
    blockExplorers: [
      {
        name: 'Scroll Alpha Blockscout',
        url: 'https://blockscout.scroll.io',
        apiUrl: 'https://blockscout.scroll.io/api',
      },
    ],
    isTestnet: true,
  },
  basegoerli: {
    name: 'basegoerli',
    chainId: 84531,
        protocol: ProtocolType.Ethereum,

    nativeToken: {
      name: 'ETH',
      symbol: 'ETH',
      decimals: 18,
    },
    rpcUrls: [
      {
        http: 'https://goerli.base.org',
      },
    ],
    blockExplorers: [
      {
        name: 'Base Scan',
        url: 'https://goerli.basescan.org',
        apiUrl: 'https://api-goerli.basescan.org'
      },
    ],
    isTestnet: true,
  },
  zksynceratestnet: {
    name: 'zksynceratestnet',
    chainId: 280,
    protocol: ProtocolType.Ethereum,
    nativeToken: {
      name: 'ETH',
      symbol: 'ETH',
      decimals: 18,
    },
    rpcUrls: [
      {
        http: 'https://testnet.era.zksync.dev',
      },
    ],
    blockExplorers: [
      {
        name: 'zkSync Era Block Explorer',
        url: 'https://goerli.explorer.zksync.io',
        apiUrl: 'https://zksync2-testnet-explorer.zksync.dev',
      },
    ],
    isTestnet: true,
  },
  goerlilinea: {
    name: 'goerlilinea',
    chainId: 59140,
        protocol: ProtocolType.Ethereum,

    nativeToken: {
      name: 'ETH',
      symbol: 'ETH',
      decimals: 18,
    },
    rpcUrls: [
      {
        http: 'https://rpc.goerli.linea.build',
      },
    ],
    blockExplorers: [
      {
        name: 'Linea Scan',
        url: 'https://goerli.lineascan.build',
        apiUrl: 'https://api-testnet.lineascan.build/api'
      },
    ],
    isTestnet: true,
  },
  mantletestnet: {
    name: 'mantletestnet',
    chainId: 5001,
    protocol: ProtocolType.Ethereum,

    nativeToken: {
      name: 'MNT',
      symbol: 'MNT',
      decimals: 18,
    },
    rpcUrls: [
      {
        http: 'https://rpc.testnet.mantle.xyz',
      },
    ],
    blockExplorers: [
      {
        name: 'Mantle Explorer',
        url: 'https://explorer.testnet.mantle.xyz',
        apiUrl: 'https://explorer.testnet.mantle.xyz/api',
      },
    ],
    isTestnet: true,
  },
  mumbai: {
    name: 'mumbai',
    chainId: 80001,
    protocol: ProtocolType.Ethereum,

    nativeToken: {
      name: 'MATIC',
      symbol: 'MATIC',
      decimals: 18,
    },
    rpcUrls: [
      {
        http: 'https://rpc.ankr.com/polygon_mumbai',
      },
    ],
    blockExplorers: [
      {
        name: 'Polygon Scan',
        url: 'https://mumbai.polygonscan.com',
        apiUrl: 'https://api.polygonscan.com/api',
      },
    ],
    isTestnet: true,
  },
  "athenstwo": {
    name: 'athenstwo',
    chainId: 7001,
    protocol: ProtocolType.Ethereum,

    nativeToken: {
      name: 'ZETA',
      symbol: 'aZETA',
      decimals: 18,
    },
    rpcUrls: [
      {
        http: 'https://api.athens2.zetachain.com/evm',
      },
    ],
    blockExplorers: [
      {
        name: 'ZetaChain Explorer',
        url: 'https://zetachain-athens-2.blockscout.com',
        apiUrl: 'https://zetachain-athens-2.blockscout.com/api',
      },
    ],
    isTestnet: true,
  }
};
