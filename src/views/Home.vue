<template>
 <Intro />
 <Projects />
 <About />
 <Contact />
</template>

<script>
// @ is an alias to /src
import Intro from '@/components/Intro.vue';
import Projects from '@/components/Projects.vue'
import About from '@/components/About.vue'
import Contact from '@/components/Contact.vue'

export default {
  name: 'Home',
  components: {
    Intro,
    Projects,
    About,
    Contact
  }
}
</script>

<style lang="scss" scoped>

</style>