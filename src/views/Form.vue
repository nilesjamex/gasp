<template>
<div>
  <Nav />
  <div class="details">
      <div class="details--intro">
          <div class="details--intro--text">
              <h1>
                  FORM
              </h1>
          </div>
          <div class="details--intro--sub">
              <h4>
                  duration: 6 months
              </h4>
              <h4>
                  Location: Ontario, Canada
              </h4>
          </div>
      </div>
      <div class="details--image">
          <img src="@/assets/Details/form.png" alt="">
      </div>
      <div class="details--projects">
          <div class="details--projects--description">
              <h1>
                  project description
              </h1>
          </div>
          <div class="details--projects--text">
              <h5>
                  we were hired to work on a mansion in one of the beautiful estates
                   in ontario, canada. We brought in our creativity and experience and 
                  we gave the client a satisfying and good look looking deliveries.
              </h5>
          </div>
          <div class="details--project--image">
              <img src="@/assets/Details/big-white.png" alt="">
              <img src="@/assets/Details/small-white.png" alt="">
              <img src="@/assets/Details/gasp/room.png" alt="">
          </div>
      </div>
      <div class="details--other--project">
          <h1>
              other projects
          </h1>
      </div>
      <Gasp />
      <Bush />
      <Both />
      <Code />
  </div>
  </div>
</template>

<script>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
// import components
import Nav from "../components/Nav.vue"
import Gasp from "../components/Projects/Gasp.vue"
import Bush from "../components/Projects/Bush.vue"
import Both from "../components/Projects/Both.vue"
import Code from "../components/Projects/Code.vue"
export default {
components: {
    Nav,
    Gasp,
    Bush,
    Both,
    Code
},
 mounted() {
    //  gsap.timeline()
    //  .from('.details--intro--text h1', {
    //      duration: 2,
    //      css: {
    //          fontStyle: 'normal',
    //          fontWeight: 800,
    //          fontSize: '477px',
    //          lineHeight: '652px',
    //          textAlign: 'center',
    //          scale: 1.6
    //           },
    //           delay: 0.5
    //  }),
     window.scrollTo(0,0)
 }
}
</script>

<style lang="scss" scoped>
@import '@/Styles/details.scss';

</style>