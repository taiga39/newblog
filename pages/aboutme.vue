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
<script>
export default {
    data:function(){
    return{
      meta: {
          title: 'Test-Page!',
          description: 'ページ個別のディスクリプショaン',
          type: 'article',
          url: 'https://example.com/test',
          image: 'https://example.com/img/ogp/test.jpg',
      },
    }
  },
  head () {
      return {
          title: this.meta.title,
          meta: [
              { hid: 'description', name: 'description', content: this.meta.description },
              { hid: 'og:type', property: 'og:type', content: this.meta.type },
              { hid: 'og:title', property: 'og:title', content: this.meta.title },
              { hid: 'og:description', property: 'og:description', content: this.meta.description },
              { hid: 'og:url', property: 'og:url', content: this.meta.url },
              { hid: 'og:image', property: 'og:image', content: this.meta.image },
          ],
      }
  },  
}
</script>
<style scoped>
header{
  background-image:url('~@/assets/images/back4.jpg');
  background-repeat:none;
  background-size:cover;
}
</style>