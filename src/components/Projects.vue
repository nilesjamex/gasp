<template>
  <div class="projects">
    <nav class="projects--nav">
      <ul class="projects--nav--list">
        <li>HOME</li>
        <li class="projects--nav--list1">WORKS</li>
        <li>ABOUT US</li>
        <li>CONTACT US</li>
      </ul>
    </nav>
    <Form />
    <router-link to="/gasp">
       <Gasp />
    </router-link>
    <router-link to="/both">
      <Both />
    </router-link>
    <router-link to="/bush">
      <Bush />
    </router-link>
    <router-link to="/code">
      <Code />
    </router-link>
  </div>
</template>

<script>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
import Gasp from "./Gasp.vue"
import Form from "./Form.vue"
import Both from "./Both.vue"
import Bush from "./Bush.vue"
import Code from "./Code.vue"
export default {
  components: {
    Gasp,
    Form,
    Both,
    Bush,
    Code
  },
   mounted() {
        gsap.timeline({
            scrollTrigger: {
                 trigger: '.projects',
                  x: 200,
                  end: "+=400",
                  scrub: 'true'
            }
        })
        .to('.projects--nav--list1', {
            duration: 1,
            css: {
                color: '#fff'
            }
            });
        gsap.timeline()
        
    }

};
</script>

<style lang="scss" scoped>
@import "@/Styles/_variables.scss";
@import '@/Styles/projects.scss';
.projects {
  padding: 2rem 6rem;
  position: relative;
  .projects--nav--list {
    color: $gray;

    li {
      margin: 0.7rem 0;
    }
  }
}
</style>