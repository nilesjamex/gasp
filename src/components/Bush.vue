<template>
        <div class="projects--text--bush">
            <div class="projects--text" ref="start">
        <h1 ref="bushText">
           BU<span>SH</span>
        </h1>
        <img ref="bushImg" class="bush--image" src="@/assets/Images/bush.png" alt="">
    </div>
    </div>
</template>

<script>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
export default {
     mounted() {
         const bushText = this.$refs.bushText;
         const bushImg = this.$refs.bushImg
    gsap.timeline({
            scrollTrigger: {
                 trigger: '.projects--text--bush',
                  x: 650,
                  end: "+=800",
                  scrub: 'true'
            }
        })
        .from(bushText, {
            duration: 1,
            opacity: 0
            })
        .from(".bush--image", {
            duration: 1,
            y: 300,
            delay: 0.3
        })
     }

}
</script>

<style lang="scss" scoped>
@import '@/Styles/projects.scss';

.bush--image {
     position: absolute;
        top: 13rem;
        right: 25rem;
        z-index: 1;
}
</style>