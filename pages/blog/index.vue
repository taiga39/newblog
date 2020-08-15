<template>
<div>
    <header class="masthead">
        <div class="overlay"></div>
        <div class="container">
        <div class="row">
            <div class="col-lg-8 col-md-10 mx-auto">
            <div class="site-heading">
                <h1 style="font-weight:800;">Blog</h1>
                <span class="subheading">真面目なメモ</span>
            </div>
            </div>
        </div>
        </div>
    </header>
    <div class="container">
        <div class="row">
            <div class="col-lg-8 col-md-10 mx-auto">
                <h2 class="graph-h">Blog</h2>
                <nuxt-link v-bind:to="'/blog/'+ jsontab[i].link" v-for="(n,i) of jsonlength" :key="n" class="post-preview">
                    <div>
                        <h2 class="post-title">
                            {{jsontab[i+(page*5)].title}}
                        </h2>
                    </div>
                    <p class="post-meta" style="padding-left:1em">
                        Posted 
                        on {{jsontab[i].date}} 
                    </p>
                </nuxt-link>
                <ul class="pagenation">
                    <li v-for="p of pagelength" :key="p+'p'" v-bind:class="{ active: page === p-1 }">
                        <button v-on:click="pagenation(p);active()">
                            {{p}}
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data:function(){
        return{
            jsonlength: 0,
            maxlength:0,
            jsontab:"",
            page:0,
            pagelength:0,
            meta: {
                title: 'Blog | タイガ★ログ',
                description: 'ブログ記事',
                type: 'article',
                url: 'https://taiga.pw/blog',
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
    mounted() {
        this.jsontab = this.$store.state.blog
        if(this.$store.state.blog != null){
            if(JSON.parse(JSON.stringify(Object.keys(this.$store.state.blog).length)) < 5){
                this.jsonlength = JSON.parse(JSON.stringify(Object.keys(this.$store.state.blog).length))
            }else{
                this.jsonlength = 5
            }
            this.maxlength = JSON.parse(JSON.stringify(Object.keys(this.$store.state.blog).length))
            this.jsontab = Object.values(this.$store.state.blog)
            this.pagelength = Math.floor(this.maxlength/5)+1
        }
    },
    methods:{
        pagenation:function(i){
            console.log(i)
            this.page = i-1
            if(this.page != 0){
                this.jsonlength = this.maxlength % (this.page*5)
            }else{
                this.jsonlength = 5
            }
        }
    }
}
</script>
<style scoped>
header{
  background-image:url('~@/assets/images/back1.jpg');
  background-repeat:none;
  background-size:cover;
}
</style>