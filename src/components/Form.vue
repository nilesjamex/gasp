<template>
        <div class="projects--text" >
        <h1>
           FO<span>RM</span>
        </h1>
        <img @click="handleClick" class="projects--image" src="@/assets/Images/form.png" alt="">
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
                 trigger: '.projects--text',
                  x: 200,
                  end: "+=800",
                  scrub: 'true'
            }
        })
        .from('.projects--text h1', {
            duration: 1,
            })
        .from('.projects--image', {
            duration: 1,
            y: 300,
            delay: 0.3
        })
     },
    methods: {
        handleClick() {
        this.$router.push({name: 'Form'})
    }
    }

}
</script>

<style lang="scss" scoped>
@import '@/Styles/projects.scss';
</style>