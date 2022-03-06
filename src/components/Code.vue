<template>
        <div class="projects--text--code">
            <div class="projects--text" ref="start">
        <h1 ref="codeText">
           CO<span>DE</span>
        </h1>
        <img ref="codeImg" class="code--image" src="@/assets/Images/code.png" alt="">
    </div>
    </div>
</template>

<script>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
export default {
 mounted() {
     const codeText = this.$refs.codeText
     const codeImg = this.$refs.codeImg
    gsap.timeline({
            scrollTrigger: {
                 trigger: '.projects--text--code',
                  x: 700,
                  end: "+=950",
                  scrub: 'true'
            }
        })
        .from(codeText, {
            duration: 1,
            opacity: 0
            })
        .from(".code--image", {
            duration: 1,
            y: 300,
            delay: 0.3
        })
     }
}
</script>

<style lang="scss" scoped>
@import '@/Styles/projects.scss';

.code--image {
     position: absolute;
        top: 13rem;
        right: 25rem;
        z-index: 1;
}
</style>