<template>  
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
</template>