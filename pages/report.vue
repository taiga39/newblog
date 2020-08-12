<template>
    <div>
        <header class="masthead">
            <div class="overlay"></div>
            <div class="container">
            <div class="row">
                <div class="col-lg-8 col-md-10 mx-auto">
                <div class="site-heading">
                    <h1 style="font-weight:800;">Report</h1>
                    <span class="subheading">ギャルのように楽しく生きていく</span>
                </div>
                </div>
            </div>
            </div>
        </header>
        <nuxt-child/>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
header{
  background-image:url('~@/assets/images/back3.jpg');
  background-repeat:none;
  background-size:cover;
}
</style>