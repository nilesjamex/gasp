<template>
<div>
  <Nav />
  <div class="details">
      <div class="details--intro">
          <div class="details--intro--text">
              <h1>
                  GASP
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
          <img src="@/assets/Details/gasp/gasp.png" alt="">
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
              <img src="@/assets/Details/gasp/big.png" alt="">
              <img src="@/assets/Details/gasp/small.png" alt="">
              <img src="@/assets/Details/stairs.png" alt="">
          </div>
      </div>
      <div class="details--other--project">
          <h1>
              other projects
          </h1>
      </div>
      <Form />
      <Bush />
      <Both />
      <Code />
  </div>
  </div>
</template>

<script>
import Nav from "../components/Nav.vue"
import Form from "../components/Projects/FormL.vue"
import Bush from "../components/Projects/Bush.vue"
import Both from "../components/Projects/Both.vue"
import Code from "../components/Projects/Code.vue"
export default {
components: {
    Nav,
    Form,
    Bush,
    Both,
    Code
},
mounted() {
    window.scrollTo(0,0)
}
}
</script>

<style lang="scss" scoped>
@import '@/Styles/details.scss';

</style>