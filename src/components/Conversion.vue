<template>
  <div>
    <p>Rate: 1 {{ selectedCoin }} = {{ marketInfo.rate }} ETH</p>
    <p>Deposit limit: {{ marketInfo.limit }} {{ selectedCoin }}</p>
    <p>Minimum deposit: {{ marketInfo.minimum }} {{ selectedCoin }}</p>
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
      return ShapeShift.marketInfo(this.selectedCoin, 'ETH')
    },
  },
}
</script>

<style scoped>
p {
  font-size: 1rem;
  color: #bebebe;
}
</style>
