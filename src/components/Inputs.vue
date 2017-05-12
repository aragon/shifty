<template>
  <form class="ui form" v-on:submit.prevent="shift">
    <div class="ui negative message" v-if="error">
      <div class="header">Error</div>
      <p>{{ error }}</p>
    </div>
    <div class="two fields">
      <div class="field">
        <div class="ui fluid search selection big dropdown">
          <input type="hidden" name="coin" v-bind:value="selectedCoin">
          <i class="dropdown icon"></i>
          <div class="default text">Select coin</div>
          <div class="menu">
            <div class="item" v-for="coin in coins" v-bind:data-value="coin.symbol"><img class="ui tiny image" v-bind:src="coin.imageSmall"> {{ coin.name }}</div>
          </div>
        </div>
      </div>
      <div class="ui field big input">
        <input type="text" name="amount" placeholder="Deposit amount" v-model="amount">
        <span class="conversion" v-if="amount > 0">~= {{ conversion.toFixed(2) }} ETH</span>
      </div>
    </div>
    <div class="field">
      <input type="text" name="returnAddress" placeholder="Return address, in case the shift doesn't work" v-model="returnAddress">
    </div>
    <div class="field">
      <input type="text" name="ethAddress" placeholder="Ethereum address that will receive the tokens" v-model="ethAddress">
    </div>
    <button class="ui primary huge fluid button">Buy tokens <span v-if="amount">by sending {{ amount }} {{ selectedCoin }}</span></button>
  </form>
</template>

<script>
import ShapeShift from '../lib/ShapeShift'

export default {
  name: 'inputs',
  data() {
    return {
      error: undefined,
      amount: undefined,
      returnAddress: undefined,
      ethAddress: undefined,
    }
  },
  computed: {
    coins() {
      return this.$store.state.coins
    },
    selectedCoin() {
      return this.$store.state.selectedCoin
    },
    conversion() {
      return this.amount * this.$store.state.marketInfo.rate
    },
  },
  methods: {
    async shift() {
      window.$('.dimmer').addClass('active')

      const pair = this.$store.state.marketInfo.pair
      const res = await ShapeShift.shift(pair, {
        amount: this.conversion,
        returnAddress: this.returnAddress,
        withdrawalAddress: this.ethAddress,
      })
      if (res.error) {
        this.error = res.error
        window.$('.dimmer').removeClass('active')
      } else {
        window.location.href = `https://shapeshift.io/#/status/${res.success.orderId}`
      }
    },
  },
  mounted() {
    ShapeShift.coins().then((coins) => {
      this.$store.commit('setCoins', coins)
      requestAnimationFrame(() => window.$('.ui.dropdown').dropdown({
        onChange: (coin) => {
          this.$store.commit('setSelectedCoin', coin)
        },
      }))
    })
  },
}
</script>

<style scoped>
.conversion {
  position: absolute;
  top: 0.75rem;
  right: 1.5rem;
  color: #bababa;
}
</style>
