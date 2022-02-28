<template>
  <div class="about">
      <nav class="about--nav">
      <ul class="about--nav--list">
        <li>HOME</li>
        <li>WORKS</li>
        <li>ABOUT US</li>
        <li>CONTACT US</li>
      </ul>
    </nav>
    <div class="about--text">
        <h2>
            niccom architect ltd. <span>based in</span> san fransico,
             california. <span>we build home and office across
                  the country.</span>
        </h2>
        <div class="about--text--testimonials">
            <div v-for="testimonial in testimonials" :key="testimonial.id">
                <div>
                <h3 class="about--text--testimonials--number">
                    {{ testimonial.number }}
                </h3>
                <h3 class="about--text--testimonials--word">
                    {{ testimonial.word }}
                </h3>
            </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            testimonials: [
                {
                    id: 1,
                    number: 127,
                    word: "clients"
                },
                {
                    id: 2,
                    number: 400,
                    word: "homes built"
                },
                {
                    id: 3,
                    number: 36,
                    word: "states"
                }
            ]
        }
    }
}
</script>

<style lang="scss">
@import "@/Styles/_variables.scss";
.about {
  padding: 2rem 6rem;
  position: relative;
  .about--nav--list {
    color: $gray;

 li {
      margin: 0.7rem 0;
    }
  }
}
.about--text {
    margin-top: 3rem;
    h2 {
        font-family: $manrope;
        font-style: normal;
        font-weight: 800;
        font-size: 64px;
        line-height: 96px;
        /* or 150% */
        letter-spacing: 0.02em;
        text-transform: uppercase;
        color: $white;
    }
    span {
        color: $number;
    }
}
.about--text--testimonials {
    font-family: $helvetica;
    font-style: normal;
    font-weight: normal;
    font-size: 48px;
    line-height: 56px;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    color: $number;
    /* arrangement */
    display: flex;
    justify-content: space-around;
    text-align: center;
    margin: 4rem 1rem;
}
.about--text--testimonials--number {
    margin: 0.5rem 0 1.5rem 0;
}
</style>