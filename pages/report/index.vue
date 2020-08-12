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
  <div class="container">
    <Graph />
    <div class="row">
        <div class="col-lg-8 col-md-10 mx-auto">
            <h2 class="graph-h">Report</h2>
            <nuxt-link v-bind:to="'/report/'+ jsontab[i].link" v-for="(n,i) of jsonlength" :key="n" class="post-preview">
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
                    <button v-on:click="pagenation(p)">
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
import Graph from "@/components/graph.vue";

export default {
    data(){
        return{
            jsonlength: 0,
            maxlength:0,
            jsontab:"",
            page:0,
            pagelength:0,
        }
    },
    mounted() {
        this.jsontab = this.$store.state.report
        if(this.$store.state.report != null){
            if(JSON.parse(JSON.stringify(Object.keys(this.$store.state.report).length)) < 5){
                this.jsonlength = JSON.parse(JSON.stringify(Object.keys(this.$store.state.report).length))
            }else{
                this.jsonlength = 5
            }
            this.maxlength = JSON.parse(JSON.stringify(Object.keys(this.$store.state.report).length))
            this.jsontab = Object.values(this.$store.state.report)
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
  background-image:url('~@/assets/images/back3.jpg');
  background-repeat:none;
  background-size:cover;
}
</style>