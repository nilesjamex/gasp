<template>
<div>
 <Intro />
 <Projects />
 <About />
 <Contact /> 
 </div>
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
  },
  mounted() {
    window.scrollTo(0,0)
  }
}
</script>

<style lang="scss" scoped>

</style>