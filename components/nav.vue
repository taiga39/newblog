<template>
<nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
    <div class="container">
        <router-link class="navbar-brand" to="/">Gal☆Blog</router-link>
        <button class="navbar-toggler navbar-toggler-right" type="button" v-on:click='isActive=!isActive'>
            Menu
        </button>
        <div class="collapse navbar-collapse" v-bind:class='{show:isActive}' id="navbarResponsive">
            <ul class="navbar-nav ml-auto" v-on:click='isActive=!isActive'>
                <li class="nav-item">
                    <router-link to="/" class="nav-link">Home</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/report" class="nav-link">Report</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/portfolio" class="nav-link">Portfolio</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/blog" class="nav-link">Blog</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/aboutus" class="nav-link">About Me</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/tech" class="nav-link">Tech</router-link>
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