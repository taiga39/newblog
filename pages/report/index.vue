<template>
<div>
  <header class="masthead">
      <div class="overlay"></div>
      <div class="container">
      <div class="row">
          <div class="col-lg-8 col-md-10 mx-auto">
          <div class="site-heading">
              <h1 style="font-weight:800;">Report</h1>
              <span class="subheading">真面目に継続してること</span>
          </div>
          </div>
      </div>
      </div>
  </header>
   <div class="container">
        <Graph :reports="report"/>
        <div class="row">
            <div class="col-lg-8 col-md-10 mx-auto">
                <h2 class="graph-h">Report</h2>
                <nuxt-link v-bind:to="'/report/'+ blogs[i].fields.slug" v-for="(n,i) of jsonlength" :key="n" class="post-preview">
                    <div>
                        <h2 class="post-title">
                            {{blogs[i+(page*5)].fields.title}}
                        </h2>
                    </div>
                    <p class="post-meta" style="padding-left:1em">
                        Posted 
                        on {{(blogs[i].fields.publishDate).slice(0,-12)}} 
                    </p>
                </nuxt-link>
                <!-- <ul class="pagenation">
                    <li v-for="p of pagelength" :key="p+'p'" v-bind:class="{ active: page === p-1 }">
                        <button v-on:click="pagenation(p)">
                            {{p}}
                        </button>
                    </li>
                </ul> -->
            </div>
        </div>
    </div>
</div>
</template>

<script>
import Graph from "@/components/graph.vue";

import {createClient} from '~/plugins/contentful.js'
const client = createClient()
export default {
    data:function(){
        return{
            jsonlength: 0,
            maxlength:0,
            jsontab:"",
            page:0,
            pagelength:0,
            meta: {
                title: 'Report | タイガ★ログ',
                description: 'レポート',
                type: 'article',
                url: 'https://taiga.pw/report',
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
    methods:{
        pagenation:function(i){
            // this.page = i-1
            // if(this.page != 0){
            //     this.jsonlength = (Math.floor(blogs.items.length/5)+1) % (this.page*5)
            // }else{
            //     this.jsonlengtha = 5
            // }
        }
    },
    asyncData ({env}) {
      return Promise.all([
        client.getEntries({
          'content_type': env.CTF_BLOG_POST_TYPE_ID,
          order: '-sys.createdAt',
          "fields.tags":"report",
        }),
        client.getEntries({
          'content_type': 'report',
          order: '-sys.createdAt',
        }),
      ]).then(([blogs,report]) => {
        return {
          blogs: blogs.items,
          jsonlength: blogs.items.length,
          pagelength: Math.floor(blogs.items.length/5)+1,
          report:report.items
        }
      }).catch(console.error)
    }
}
</script>
<style scoped>
header{
  background-image:url('~@/assets/images/back3.jpg');
  background-repeat:none;
  background-size:cover;
}
</style>