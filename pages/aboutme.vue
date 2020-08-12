<template>
    <div>
        <header class="masthead">
            <div class="overlay"></div>
            <div class="container">
            <div class="row">
                <div class="col-lg-8 col-md-10 mx-auto">
                <div class="site-heading">
                    <h1 style="font-weight:800;">AboutMe</h1>
                    <span class="subheading">ギャルのように楽しく生きていく</span>
                </div>
                </div>
            </div>
            </div>
        </header>
        <article>
            <div class="container">
            <div class="row">
                <!-- <div class="col-lg-8 col-md-10 mx-auto" v-html="content"> -->
                <div class="col-lg-8 col-md-10 mx-auto">
                    {{ $route.params.id }}
                </div>
            </div>
            </div>
        </article>
    </div>
</template>
<style scoped>
header{
  background-image:url('~@/assets/images/back4.jpg');
  background-repeat:none;
  background-size:cover;
}
</style>