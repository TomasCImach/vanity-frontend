import { ChainId, Token, WETH9 } from '@pancakeswap/sdk'
import { USDC_RINKEBY } from './common'

export const rinkebyTestnetTokens = {
  weth: WETH9[ChainId.RINKEBY],
  celr: new Token(ChainId.RINKEBY, '0x4DBCdF9B62e891a7cec5A2568C3F4FAF9E8Abe2b', 9, 'VNW', 'Vanity', ''),
  usdc: USDC_RINKEBY,
}
