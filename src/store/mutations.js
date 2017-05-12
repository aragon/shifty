export const appState = {
  coins: [],
  selectedCoin: 'BTC',
  ethAddress: undefined,
  marketInfo: {},
}

export const mutations = {
  setCoins(state, coins) {
    state.coins = coins
  },
  setSelectedCoin(state, coin) {
    state.selectedCoin = coin
  },
  setAmount(state, amount) {
    state.amount = amount
  },
  setReturnAddress(state, addr) {
    state.returnAddress = addr
  },
  setEthAddress(state, addr) {
    state.ethAddress = addr
  },
  setMarketInfo(state, marketInfo) {
    state.marketInfo = marketInfo
  },
}
