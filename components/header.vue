<template>
  <header class="masthead" v-bind:class="{ 'class-a': isA, 'class-b': isB }">
    <div class="overlay"></div>
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-md-10 mx-auto">
          <div class="site-heading">
            <h1 style="font-weight:800;">Gal☆Blog{{this.$route.path}}</h1>
            <span class="subheading">ギャルのように楽しく生きていく</span>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
<script>
export default {
    data() {
        return{
            isA: true,
            isB: false,

        }
    },
    created(){
        console.log(this.$route.path)
    },
}

</script>
<style scoped>
header{
  background-image:url('~@/assets/images/back0.jpg');
  background-repeat:none;
  background-size:cover;
}
</style>