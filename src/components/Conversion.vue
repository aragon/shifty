<template>
  <div class="ui equal width stackable grid">
    <div class="center aligned column">
      <label>Exchange rate</label>
      1 {{ selectedCoin }} = {{ marketInfo.rate }} ETH
    </div>
    <div class="center aligned column">
      <label>Deposit limit</label>
      {{ marketInfo.limit }} {{ selectedCoin }}
    </div>
    <div class="center aligned column">
      <label>Minimum deposit</label>
      {{ marketInfo.minimum }} {{ selectedCoin }}
    </div>
  </div>
</template>

<script>
import ShapeShift from '../lib/ShapeShift'

export default {
  name: 'conversion',
  computed: {
    selectedCoin() {
      return this.$store.state.selectedCoin
    },
  },
  asyncComputed: {
    marketInfo() {
      return this.$store.state.marketInfo
    },
  },
  mounted() {
    const setMarketInfo = () => {
      ShapeShift.marketInfo(this.selectedCoin, 'ETH').then((marketInfo) => {
        this.$store.commit('setMarketInfo', marketInfo)
      })
    }
    setMarketInfo()
    setInterval(() => setMarketInfo(), 30 * 1000)
  },
}
</script>

<style scoped>
label {
  display: block;
  color: #bababa;
}
p {
  font-size: 1rem;
  color: #bebebe;
}
</style>
