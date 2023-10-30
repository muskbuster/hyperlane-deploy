import { ChainMap, ChainMetadata, ProtocolType } from '@hyperlane-xyz/sdk';

// import { chainMetadata } from '@hyperlane-xyz/sdk';
// A map of chain names to ChainMetadata
export const chains: ChainMap<ChainMetadata> = {
  // ----------- Add your chains here -----------------
  anvil1: {
    name: 'anvil1',
    protocol: ProtocolType.Ethereum,
    // anvil default chain id
    chainId: 31337,
    // Used to configure a Warp Route to bridge anvil1 ETH
    // to anvil2 in CI tests.
    nativeToken: {
      name: 'ether',
      symbol: 'ETH',
      decimals: 18,
    },
    rpcUrls: [
      {
        http: 'http://127.0.0.1:8545',
      },
    ],
    // You can set overrides for transaction fields here
    // transactionOverrides: {
    //   gasLimit: 1000000
    // },
  },
  anvil2: {
    name: 'anvil2',
    protocol: ProtocolType.Ethereum,
    chainId: 31338,
    rpcUrls: [
      {
        http: 'http://127.0.0.1:8555',
      },
    ],
  },
  nordek: {
    name: 'nordek',
    protocol: ProtocolType.Ethereum,
    chainId: 81041,
    nativeToken: {
      name: 'Nordek',
      symbol: 'NRK',
      decimals: 18,
    },
    rpcUrls: [
      {
        http: 'https://mainnet-rpc.nordekscan.com/',
      },
    ],
    blockExplorers: [
      {
        name: 'Nordek Scan',
        url: 'http://nordekscan.com/',
        apiUrl: 'https://nordekscan.com/api',
      },
    ],
  },
  linea: {
    name: 'linea',
    protocol: ProtocolType.Ethereum,
    chainId: 59144,
    nativeToken: {
      name: 'Ethereum',
      symbol: 'ETH',
      decimals: 18,
    },
    rpcUrls: [
      {
        http: 'https://linea.blockpi.network/v1/rpc/public',
      },
    ],
    blockExplorers: [
      {
        name: 'Linea Scan',
        url: 'https://lineascan.build',
        apiUrl: 'https://lineascan.build/api',
      },
    ],
  },
 
};
