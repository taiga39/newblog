<template>  
<div>
    <header class="masthead">
        <div class="overlay"></div>
        <div class="container">
        <div class="row">
            <div class="col-lg-8 col-md-10 mx-auto">
            <div class="post-heading">
                <h1>{{blogs[0].fields.title}}</h1>
                <h2 class="subheading"></h2>
                <span class="meta">Posted on {{(blogs[0].fields.publishDate).slice(0,-12)}}</span>
            </div>
            </div>
        </div>
        </div>
    </header>
    <article>
        <div class="container">
        <div class="row">
            <div class="col-lg-8 col-md-10 mx-auto" v-html="$md.render(blogs[0].fields.body)">
            </div>
        </div>
        </div>
    </article>
</div>
</template>
<script>
import {createClient} from '~/plugins/contentful.js'
const client = createClient()
export default {
  data:function(){
    return{
      title: "",
      content:"",
      description:"",
      category:"",
      date:"",
      meta: {
          title: JSON.parse(JSON.stringify(this.$store.state.tech))[(this.$route.path).split('/')[2]]["title"] + ' | Tech | タイガ★ログ',
          description: (JSON.parse(JSON.stringify(this.$store.state.tech))[(this.$route.path).split('/')[2]]["content"].replace(/<("[^"]*"|'[^']*'|[^'">])*>/g,'')).substr(0,82),
          type: 'article',
          url: 'https://taiga.pw/tech/'+(this.$route.path).split('/')[2],
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
  created(){
      this.category = (this.$route.path).split('/')[1]
      this.article = (this.$route.path).split('/')[2]
  },
  mounted(){
    if(this.$store.state.tech != ""){
      this.title = JSON.parse(JSON.stringify(this.$store.state.tech))[this.article]["title"]
      this.content = JSON.parse(JSON.stringify(this.$store.state.tech))[this.article]["content"]
      this.date = JSON.parse(JSON.stringify(this.$store.state.tech))[this.article]["date"]
    }
  },
  asyncData ({env,params}) {
    return Promise.all([
      client.getEntries({
        'content_type': env.CTF_BLOG_POST_TYPE_ID,
        order: '-sys.createdAt',
        "fields.tags":"tech",
        "fields.slug":params.id
      }),
    ]).then(([blogs]) => {
      return {
        blogs: blogs.items,
      }
    }).catch(console.error)
  }
}
</script>
<style scoped>
.meta{
    text-align:center;
}
header{
  background-image:url('~@/assets/images/back2.jpg');
  background-repeat:none;
  background-size:cover;
}
</style>