<template>
    <div class="projects--text--gasp">
        <div class="projects--text">
        <h1 class="gaspText" ref="gaspText">
           GA<span>SP</span>
        </h1>
        <img ref="gaspImg" class="gasp--image" src="@/assets/Images/gasp.png" alt="">
    </div>
    </div>
</template>

<script>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
export default {
     mounted() {
         var text = this.$refs.gaspText;
         var image = this.$refs.gaspImg;
         var start = this.$refs.start;
    gsap.timeline({
            scrollTrigger: {
                 trigger: ".projects--text--gasp",
                  x: 650,
                  end: "+=800",
                  scrub: 'true'
            }
        })
        .from(".gaspText", {
            duration: 1
            })
        .from(".gasp--image", {
            duration: 1,
            y: 300,
        })
     }

}
</script>

<style lang="scss" scoped>
@import '@/Styles/projects.scss';

.gasp--image {
     position: absolute;
        top: 13rem;
        right: 25rem;
        z-index: 1;
}
</style>