import { TokenType } from '@hyperlane-xyz/hyperlane-token';

import type { WarpRouteConfig } from '../src/warp/config';

// A config for deploying Warp Routes to a set of chains
// Not required for Hyperlane core deployments
export const warpRouteConfig: WarpRouteConfig = {
  base: {
    chainName: 'polygonzkevmtestnet',
    type: TokenType.collateral,
    address: '0x9772e198e917aC31da7825dD6b2852b3D0171CF2',
  },
  synthetics: [
    {
      chainName: 'sepolia',
    },
    {
      chainName: 'mumbai',
    },
    {
      chainName: 'fuji',
    },
    {
      chainName: 'moonbasealpha',
    },
    {
      chainName: 'alfajores',
    },
  ],
};
