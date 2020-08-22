<template>
<div>
  <header class="masthead">
    <div class="overlay"></div>
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-md-10 mx-auto">
          <div class="site-heading">
            <h1 style="font-weight:800;">タイガ★ログ</h1>
            <span class="subheading">３０歳まで真面目に生きる</span>
          </div>
        </div>
      </div>
    </div>
  </header>
  <div class="container">
    <div class="row">
      <div class="col-lg-8 col-md-10 mx-auto" id="examlpe-1">
        <div class="title-box1-title"><span class="title-box1-title-span">30歳</span>まで残り</div>
        <div class="title-box1">
          <span class="nokori">{{termday}}</span><span class="days">days</span>
        </div>
        <div style="display:flex;">
          <input id="all" type="radio" name="tab_item" checked>
          <label class="tab_item" for="all" v-on:click="change(1)" v-bind:class="{'active': isActive === 1}">レポート</label>
          <input id="programming" type="radio" name="tab_item">
          <label class="tab_item" for="programming" v-on:click="change(2)" v-bind:class="{'active': isActive === 2}">ブログ</label>
          <input id="design" type="radio" name="tab_item">
          <label class="tab_item" for="design" v-on:click="change(3)" v-bind:class="{'active': isActive === 3}">テック</label>
        </div>
        <ul style="padding:0">
          <li v-if="isActive === 1" style="list-style:none;">
            <Child :jsondata="$store.state.posts" :catename="report" /> 
          </li>
          <li v-else-if="isActive === 2" style="list-style:none;">
            <Child :jsondata="$store.state.blogs" :catename="blog" /> 
          </li>
          <li v-else-if="isActive === 3" style="list-style:none;">
            <Child :jsondata="$store.state.techs" :catename="tech"/> 
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>
</template>

<script lang="ts">
  import {createClient} from '~/plugins/contentful.js'
  import Vue from 'vue'
  import Child from "@/components/child.vue";
  import '@/assets/css/clean-blog.min.css'
  import "@/assets/css/bootstrap.min.css";
  import "@/assets/css/all.min.css";
  import { mapState, mapGetters } from 'vuex'

  type Data = {
    isActive: number 
    termday: any
  }
  const client = createClient()

  export default {
    data(){
      return{
        isActive: 1,
        termday: 10000,
        report: "report",
        blog: "blog",
        tech: "tech"
      }
    },
    methods: {
      change: function(num: number){
        this.isActive = num
      }
    },
    mounted(){
      var today = new Date();
      var year = today.getFullYear();
      var month = today.getMonth() + 1;
      var day = today.getDate();
      var date1: any = new Date(year ,month ,day);
      var date2: any = new Date(2023, 5, 12);
      this.termday = (date2 - date1) / 86400000;
    },
    computed:{
      ...mapState(['posts','blogs','techs'])
    }
  }
</script>

<style scoped>
header{
  background-image:url('~@/assets/images/back0.jpg');
  background-repeat:none;
  background-size:cover;
}
.title-box1-title{
  width:70%;
  font-size:1.5vw;
  margin:0 auto;
}
.title-box1-title-span{
  font-size:3vw;
  font-weight:500;
}
.title-box1{
  border: 1px solid #212529;
  background:#212529;
  color: white;
  padding: 10px 10px;
  text-align: center;
  margin:0 auto 50px;
  width:70%;
}
.nokori{
  color:red;font-size:6vw;font-weight:800;
}
.days{
  font-size:2vw;
}
.tab_item {
  width: calc(100%/3);
  height: 50px;
  border-bottom: 3px solid #5ab4bd;
  background-color: white;
  line-height: 50px;
  font-size: 16px;
  text-align: center;
  color: #565656;
  display: block;
  text-align: center;
  font-weight: bold;
  transition: all 0.2s ease;
  cursor: pointer;
}
.tab_item:hover {
  opacity: 0.75;
}
input[name="tab_item"] {
  display: none;
}

.active{
  background-color: #5ab4bd;
  color: #fff;
}
@media screen and (max-width:550px) {
  .tab_item {
    height:10vw;
    font-size: 0.8em;
    line-height: 10vw;
  }
  .title-box1-title{
    font-size:4vw;
  }
  .title-box1-title-span{
    font-size:6vw;
  }
  .nokori{
    font-size:10vw;
  }
  .days{
    font-size:5vw;
  }
}
</style>
