export const appState = {
  coins: [],
  selectedCoin: 'BTC',
  ethAddress: undefined,
  emailAddress: undefined,
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
  setEthAddress(state, addr) {
    state.ethAddress = addr
  },
  setEmailAddress(state, addr) {
    state.emailAddress = addr
  },
}
