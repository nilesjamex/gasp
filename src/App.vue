<template>
  <div id="nav">

  </div>
  <router-view/>
</template>

<script>
export default {
  
}
</script>

<style lang="scss">
@import './Styles/_variables.scss';
@import './Styles/_mixin.scss';
html, body {
  background-color: $bg;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
