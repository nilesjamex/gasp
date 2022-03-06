<template>
  <div id="nav">
    <router-view v-slot="{ Component }">
    <transition name="route" mode="out-in" appear>
      <component :is="Component" />
    </transition>
  </router-view>
  </div>
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
li {
  list-style: none;
}
a {
  text-decoration: none;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

    &::-webkit-scrollbar {
      width: 5px;
    }
}

/* route transition */
  .route-enter-from {
  opacity: 0;
}
.route-enter-active {
  transition: all 0.7s;
}
.route-leave-to {
  opacity: 0;
}
.route-leave-active {
  transition: all 0.7s;
}  
</style>
