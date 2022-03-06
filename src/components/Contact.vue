<template>
  <div class="contact">
      <nav class="contact--nav">
        <ul class="contact--nav--list">
            <li>HOME</li>
            <li>WORKS</li>
            <li>ABOUT US</li>
            <li class="contact--nav--list1" >CONTACT US</li>
        </ul>
    </nav>
    <div class="contact--text">
        <h2>
            wanna work with <br />
            us? <span>let’s talk</span>
        </h2>
    </div>
    <div class="contact--social">
        <hr ref="line1" class="contact--social--line1" />
        <ul ref="socials">
            <li>instagram</li>
            <li>pinterest</li>
            <li>facebook</li>
            <li>twitter</li>
        </ul>
        <hr ref="line2" class="contact--social--line1" />
    </div>
    <div ref="copyright" class="contact--footer">
        <ul>
            <li>ALL RIGHT RESERVED</li>
            <li>BUILT BY Niles</li>
            <li>DESIGNED BY OLACODES</li>
        </ul>
    </div>
  </div>
</template>

<script>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
export default {
mounted() {
    const line1 = this.$refs.line1;
    const socials = this.$refs.socials
     gsap.timeline({
            scrollTrigger: {
                 trigger: '.contact',
                  x: 200,
                  end: "+=600",
                  scrub: 'true'
            }
        })
        .to('.contact--nav--list1', {
            duration: 1,
            css: {
                color: '#fff'
            }
            })
     gsap.timeline({scrollTrigger: {
         trigger: '.contact--text',
                  x: 200,
                  end: "+=550",
                  scrub: 'true'
             }
        })
        .from('.contact--text h2', {
            duration: 1,
            opacity: 0,
            y: 200,
            delay: 0.7
        })
        .from(line1, {
            duration: 1,
            css: {
                width: 0
            },
            delay: 0.7
        })
        gsap.timeline({
            scrollTrigger: {
                trigger: '.contact--social',
                  x: 200,
                  end: "+=210",
                  scrub: 'true'
            }
        })
        .from(socials, {
            duration: 1,
            opacity: 0,
            delay: 0.7
        })
}
}
</script>

<style lang="scss" scoped>
@import '@/Styles/_variables.scss';
.contact {
    padding: 2rem 0rem;
    .contact--nav {
        padding: 0rem 6rem;
    }
    .contact--nav--list {
        color: $gray;

        li {
            margin: 0.7rem 0;
        }
    }
}
.contact--text {
    padding: 0rem 6rem;
    margin: 3rem 0;
    h2 {
        font-family: $manrope;
        font-style: normal;
        font-weight: 800;
        font-size: 7rem;
        line-height: 164px;
        letter-spacing: 0.02em;
        text-transform: uppercase;
        color: $white;
    }
    span {
        text-decoration: underline;
    }
}
.contact--social {
    margin-top: 5rem;
    ul {
        display: flex;
        grid-gap: 5rem;
        padding: 0rem 6rem;
        margin: 2rem 0;
        li {
            font-family: $helvetica;
            font-style: normal;
            font-weight: bold;
            font-size: 1rem;
            line-height: 19px;
            letter-spacing: 0.02em;
            color: $white;
        }
    }
}
.contact--footer {
    padding: 2rem 6rem 0 6rem;
    ul {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-family: $helvetica;
        font-style: normal;
        font-weight: bold;
        font-size: 16px;
        line-height: 1rem;
        letter-spacing: 0.02em;
        color: $number;
        text-transform: uppercase;
    }
}
</style>