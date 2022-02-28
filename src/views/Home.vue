<template>
 <Intro />
 <Projects />
 <About />
</template>

<script>
// @ is an alias to /src
import Intro from '@/components/Intro.vue';
import Projects from '@/components/Projects.vue'
import About from '@/components/About.vue'

export default {
  name: 'Home',
  components: {
    Intro,
    Projects,
    About
  }
}
</script>

<style lang="scss" scoped>

</style>