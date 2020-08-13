<template>
<nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
    <div class="container">
        <nuxt-link class="navbar-brand" to="/">タイガ★ログ</nuxt-link>
        <button class="navbar-toggler navbar-toggler-right" type="button" v-on:click='isActive=!isActive'>
            Menu
        </button>
        <div class="collapse navbar-collapse" v-bind:class='{show:isActive}' id="navbarResponsive">
            <ul class="navbar-nav ml-auto" v-on:click='isActive=!isActive'>
                <li class="nav-item">
                    <nuxt-link to="/" class="nav-link">Home</nuxt-link>
                </li>
                <li class="nav-item">
                    <nuxt-link to="/report" class="nav-link">Report</nuxt-link>
                </li>
                <!-- <li class="nav-item">
                    <nuxt-link to="/portfolio" class="nav-link">Portfolio</nuxt-link>
                </li> -->
                <li class="nav-item">
                    <nuxt-link to="/blog" class="nav-link">Blog</nuxt-link>
                </li>
                <li class="nav-item">
                    <nuxt-link to="/aboutme" class="nav-link">About Me</nuxt-link>
                </li>
                <li class="nav-item">
                    <nuxt-link to="/tech" class="nav-link">Tech</nuxt-link>
                </li>
            </ul>
        </div>
    </div>
</nav>
</template>
<script>
export default {
    data(){
      return {
        isActive: false,
      }
    },
}
</script>