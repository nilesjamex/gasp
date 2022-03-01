<template>
  <nav>
      <div>
          
          <router-link to="/">
          <h4>
              HOME
              </h4>
           </router-link>
          
      </div>
       <div>
          <h4>
              MENU
          </h4>
      </div>
  </nav>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import "@/Styles/_variables.scss";
a {
    text-decoration: none;
}
nav {
    padding: 2rem 4rem;
    display: flex;
    justify-content: space-between;
    align-content: center;

    h4 {
        font-family: $helvetica;
        font-style: normal;
        font-weight: bold;
        font-size: 16px;
        line-height: 19px;
        color: $gray;
        cursor: pointer;
    }
}
</style>