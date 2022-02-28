<template>
<div class="hero">
    <nav class="hero--nav">
        <ul class="hero--nav--list">
            <li>HOME</li>
            <li>WORKS</li>
            <li>ABOUT US</li>
            <li>CONTACT US</li>
        </ul>
    </nav>
    <div class="hero--text">
        <h1 class="hero--text--main">
            We help people build their dream homes.
        </h1>
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
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
</style>