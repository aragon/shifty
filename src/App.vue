<template>
  <div id="app" class="ui text container segment">
    <inputs></inputs>
    <div class="ui hidden divider"></div>
    <conversion></conversion>
  </div>
</template>

<script>
import Inputs from './components/Inputs'
import Conversion from './components/Conversion'

export default {
  name: 'app',
  components: {
    Inputs,
    Conversion,
  },
}
</script>

<style>
body {
  background: #28394d url(https://shapeshift.io/images/bg.jpg) no-repeat center center;
}
</style>
