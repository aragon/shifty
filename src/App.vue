<template>
  <div id="app" class="ui text container segment">
    <inputs></inputs>
    <div class="ui hidden divider"></div>
    <conversion></conversion>

    <div class="ui inverted dimmer">
      <div class="ui text loader">Loading</div>
    </div>
    <div class="ui hidden divider"></div>
    <a href="https://shapeshift.io" id="poweredBy" target="_blank"><img class="ui mini middle aligned image" src="https://shapeshift.io/legacy/images/lens_icon.png">Powered by ShapeShift</a>
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
#app {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
}
#poweredBy {
  text-align: center;
  display: block;
  font-size: 0.75rem;
}
@media only screen and (max-width:767px) {
  #app {
    width: 100% !important;
    margin: 0 !important;
  }
}
</style>
