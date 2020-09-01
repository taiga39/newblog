<template>
<div>
    <header class="masthead">
        <div class="overlay"></div>
        <div class="container">
        <div class="row">
            <div class="col-lg-8 col-md-10 mx-auto">
            <div class="post-heading">
                <h1>{{blogs[0].fields.title}}</h1>
                <span class="meta">Posted on {{(blogs[0].fields.publishDate).slice(0,-12)}}</span>
            </div>
            </div>
        </div>
        </div>
    </header>
    <article>
        <div class="container">
        <div class="row">
            <div class="col-lg-8 col-md-10 mx-auto post-content line-numbers" v-html="$md.render(blogs[0].fields.body)">
            </div>
        </div>
        </div>
    </article>
</div>
</template>
<script>
import {createClient} from '~/plugins/contentful.js'
import Prism from '~/plugins/prism'
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
                title: "sss",
                description: "ss",
                type: 'article',
                url: 'https://taiga.pw/blog/'+(this.$route.path).split('/')[2],
                image: 'https://firebasestorage.googleapis.com/v0/b/blog-1532b.appspot.com/o/ogp.jpg?alt=media&token=328736a1-cc29-47c1-854b-0bf7d03bd0c8',
            },
            metatitle:"",
            metadescription:""   
        }
    },
    head () {
      return {
        title: this.metatitle + ' | Blog | タイガ★ログ',
        meta: [
            { hid: 'description', name: 'description', content: this.metadescription },
            { hid: 'og:type', property: 'og:type', content: this.meta.type },
            { hid: 'og:title', property: 'og:title', content: this.metatitle},
            { hid: 'og:description', property: 'og:description', content: this.metadescription },
            { hid: 'og:url', property: 'og:url', content: this.meta.url },
            { hid: 'og:image', property: 'og:image', content: this.meta.image },
        ],
      }
    },
    mounted() {
        Prism.highlightAll()
    },
    asyncData ({env,params}) {
    return Promise.all([
      client.getEntries({
        'content_type': env.CTF_BLOG_POST_TYPE_ID,
        order: '-sys.createdAt',
        "fields.tags":"blog",
        "fields.slug":params.id
      }),
    ]).then(([blogs]) => {
      return {
        blogs: blogs.items,
        metatitle: blogs.items[0].fields.title,
        metadescription:blogs.items[0].fields.description,
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
  background-image:url('~@/assets/images/back1.jpg');
  background-repeat:none;
  background-size:cover;
}
</style>