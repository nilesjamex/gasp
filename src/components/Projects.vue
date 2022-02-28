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
    <div v-for="link in links" :key="link.id">
       <div class="projects--text">
        <h1>
          {{ link.text1 }}<span>{{ link.text2 }}</span>
        </h1>
        <img class="projects--image" :src="link.image" alt="" style="width:100%">
    </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      links: [
         {
          id: 1,
          text1: 'FO',
          text2: 'RM',
          image: './assets/Image/form.png'
        },
        {
          id: 2,
          text1: 'GA',
          text2: 'SP',
          image: '@/assets/Image/form.png'
        },
        {
          id: 3,
          text1: 'BU',
          text2: 'SH',
          image: '@/assets/Image/form.png'
        },
         {
          id: 4,
          text1: 'BO',
          text2: 'TH',
          image: '@/assets/Image/form.png'
        },
         {
          id: 5,
          text1: 'CO',
          text2: 'DE',
          image: '@/assets/Image/form.png'
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