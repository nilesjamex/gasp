<template>
  <div class="projects">
    <nav class="projects--nav">
      <ul class="projects--nav--list">
        <li>HOME</li>
        <li>WORKS</li>
        <li>ABOUT US</li>
        <li>CONTACT US</li>
      </ul>
    </nav>
    <Form />
    <Gasp />
    <Both />
    <Bush />
    <Code />
  </div>
</template>

<script>
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
  data() {
    return {
      links: [
         {
          id: 1,
          text1: 'FO',
          text2: 'RM',
          image: "https://github.com/nilesjamex/gasp/blob/adeabb73679cea9f92c8d485d5e5802c8a0ecf11/src/assets/Images/form.png"
        },
        {
          id: 2,
          text1: 'GA',
          text2: 'SP',
          image: "https://github.com/nilesjamex/gasp/blob/adeabb73679cea9f92c8d485d5e5802c8a0ecf11/src/assets/Images/form.png"
        },
        {
          id: 3,
          text1: 'BU',
          text2: 'SH',
          image: 'https://github.com/nilesjamex/gasp/blob/adeabb73679cea9f92c8d485d5e5802c8a0ecf11/src/assets/Images/form.png'
        },
         {
          id: 4,
          text1: 'BO',
          text2: 'TH',
          image: 'https://github.com/nilesjamex/gasp/blob/adeabb73679cea9f92c8d485d5e5802c8a0ecf11/src/assets/Images/form.png'
        },
         {
          id: 5,
          text1: 'CO',
          text2: 'DE',
          image: 'https://github.com/nilesjamex/gasp/blob/adeabb73679cea9f92c8d485d5e5802c8a0ecf11/src/assets/Images/form.png'
        },
      ]
    }
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