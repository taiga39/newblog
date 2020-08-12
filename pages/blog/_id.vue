<template>
<div>
    <header class="masthead">
        <div class="overlay"></div>
        <div class="container">
        <div class="row">
            <div class="col-lg-8 col-md-10 mx-auto">
            <div class="post-heading">
                <h1>{{title}}</h1>
                <h2 class="subheading"></h2>
                <span class="meta">Posted on {{date}}</span>
            </div>
            </div>
        </div>
        </div>
    </header>
    <article>
        <div class="container">
        <div class="row">
            <div class="col-lg-8 col-md-10 mx-auto" v-html="content">
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
      title: "",
      content:"",
      description:"",
      category:"",
      date:""
    }
  },
  created(){
      this.category = (this.$route.path).split('/')[1]
      this.article = (this.$route.path).split('/')[2]
  },
  mounted(){
    if(this.$store.state.blog != ""){
      this.title = JSON.parse(JSON.stringify(this.$store.state.blog))[this.article]["title"]
      this.content = JSON.parse(JSON.stringify(this.$store.state.blog))[this.article]["content"]
      this.date = JSON.parse(JSON.stringify(this.$store.state.blog))[this.article]["date"]
    }
  },
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