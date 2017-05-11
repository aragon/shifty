<template>
  <form class="ui form">
    <div class="two fields">
      <div class="field">
        <div class="ui fluid search selection dropdown">
          <input type="hidden" name="coin" v-bind:value="selectedCoin">
          <i class="dropdown icon"></i>
          <div class="default text">Select coin</div>
          <div class="menu">
            <div class="item" v-for="coin in coins" v-bind:data-value="coin.symbol"><img class="ui tiny image" v-bind:src="coin.imageSmall"> {{ coin.name }}</div>
          </div>
        </div>
      </div>
      <div class="ui field big input">
        <input type="text" placeholder="Amount" v-model="amount">
      </div>
    </div>
    <div class="field">
      <input type="text" placeholder="Ethereum address that will receive the tokens" v-model="ethAddress">
    </div>
    <div class="field">
      <input type="email" placeholder="Email for receipt (optional)" v-model="emailAddress">
    </div>
    <button class="ui primary huge fluid button">Send</button>
  </form>
</template>

<script>
import ShapeShift from '../lib/ShapeShift'

export default {
  name: 'inputs',
  computed: {
    coins() {
      return this.$store.state.coins
    },
    selectedCoin() {
      return this.$store.state.selectedCoin
    },
    amount: {
      get() {
        return this.$store.state.amount
      },
      set(value) {
        this.$store.commit('setAmount', parseFloat(value))
      },
    },
    ethAddress: {
      get() {
        return this.$store.state.ethAddress
      },
      set(value) {
        this.$store.commit('setEthAddress', value)
      },
    },
    emailAddress: {
      get() {
        return this.$store.state.emailAddress
      },
      set(value) {
        this.$store.commit('setEmailAddress', value)
      },
    },
  },
  mounted() {
    const setCoins = () => {
      ShapeShift.coins().then((coins) => {
        this.$store.commit('setCoins', coins)
        requestAnimationFrame(() => window.$('.ui.dropdown').dropdown({
          onChange: (coin) => {
            this.$store.commit('setSelectedCoin', coin)
          },
        }))
      })
    }
    setCoins()
    setInterval(() => setCoins(), 60 * 1000)
  },
}
</script>

<style scoped>
</style>
