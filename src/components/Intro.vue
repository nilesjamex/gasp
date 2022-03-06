<template>
<div class="hero">
    <nav class="hero--nav">
        <ul class="hero--nav--list">
            <li class="hero--nav--list1">HOME</li>
            <li>WORKS</li>
            <li>ABOUT US</li>
            <li>CONTACT US</li>
        </ul>
    </nav>
    <div class="hero--text">
        <h1 class="hero--text--main">
           <span class="span1">
             We help people  </span> <span class="span2">
                build their </span> <span class="span3">
                  dream homes.  </span> 
        </h1>
    </div>
</div>
</template>

<script>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
export default {

    mounted() {
    gsap.timeline({
            scrollTrigger: {
                 trigger: '.hero',
                  x: 200,
                  end: "+=400",
                  scrub: 'true'
            }
        })
        .to('.hero--nav--list1', {
            duration: 1,
            css: {
                color: '#fff'
            }
            });
        gsap.timeline()
        .from('.span1', {
            duration: 1,
            opacity: 0,
            y: 200,
            delay: 0.3
        })
        .from('.span2', {
            duration: 1,
            opacity: 0,
            y: 200,
            delay: 0.3
        })
        .from('.span3', {
            duration: 1,
            opacity: 0,
            y: 200,
            delay: 0.3
        })
        
    }

}
</script>

<style lang="scss" scoped>
@import '@/Styles/_breakpoints.scss';
@import '@/Styles/_variables.scss';
.hero {
    padding: 2rem 6rem;

    .hero--nav--list {
        color: $gray;

        li {
            margin: 0.7rem 0;
        }
    }
}
.hero--text--main {
    font-family: $manrope;
    font-style: normal;
    font-weight: 800;
    font-size: 10rem;
    line-height: 187px;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    color: $white;
    transition: all 0.5s ease-in-out;

    &:hover {
        color: $gray;
    }
}
@include lg {
    .hero--text {
        display: none;
    }
}
</style>