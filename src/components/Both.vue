<template>
        <div class="projects--text--both">
            <div class="projects--text" ref="start">
        <h1 ref="bothText">
           BO<span>TH</span>
        </h1>
        <img ref="bothImg" class="both--image" src="@/assets/Images/both.png" alt="">
    </div>
    </div>
</template>

<script>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
export default {
     mounted() {
         const bothText = this.$refs.bothText;
         const bothImg = this.$refs.bothImg
    gsap.timeline({
            scrollTrigger: {
                 trigger: '.projects--text--both',
                  x: 650,
                  end: "+=800",
                  scrub: 'true'
            }
        })
        .from(bothText, {
            duration: 1,
            opacity: 0
            })
        .from(".both--image", {
            duration: 1,
            y: 300,
            delay: 0.3
        })
     }

}
</script>

<style lang="scss" scoped>
@import '@/Styles/projects.scss';

.both--image {
     position: absolute;
        top: 13rem;
        right: 25rem;
        z-index: 1;
}
</style>