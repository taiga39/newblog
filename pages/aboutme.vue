<template>
    <div>
        <header class="masthead">
            <div class="overlay"></div>
            <div class="container">
            <div class="row">
                <div class="col-lg-8 col-md-10 mx-auto">
                <div class="site-heading">
                    <h1 style="font-weight:800;">AboutMe</h1>
                    <span class="subheading">真面目な僕について</span>
                </div>
                </div>
            </div>
            </div>
        </header>
        <article>
            <div class="container">
            <div class="row">
                <div class="col-lg-8 col-md-10 mx-auto">
                    <h2>イシカワタイガ</h2>
                    <h3>経歴</h3>
                    <p>
                        <br>
                        ２０１７年に大学を卒業後、引き篭もる。
                        <br>
                        ２０１９年４月、東京でWebエンジニアを始める。
                        <br>
                        今のところ、初学者くらいのエンジニア。
                        <br>
                        <br>
                        がんばります、ゴルフ１００切りしたい。
                    </p>
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
        title: 'About Me | タイガ★ログ',
        description: 'イシカワタイガ',
        type: 'article',
        url: 'https://taiga.pw/aboutme',
        image: 'https://firebasestorage.googleapis.com/v0/b/blog-1532b.appspot.com/o/ogp.jpg?alt=media&token=328736a1-cc29-47c1-854b-0bf7d03bd0c8',
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