<template>
  <div>
    <!-- render blog posts -->
    <ul>
      <li v-for="report in reports" :key="report.fields.title">
        <div v-html="$md.render(report.fields.body)">
        </div>
      </li>
    </ul>   
    <ul>
      <li v-for="blog in blogs" :key="blog.fields.title">
        <div v-html="$md.render(blog.fields.body)">
        </div>
      </li>
    </ul>
    <!-- <div v-html="$md.render(posts[0].fields.description)">
    </div> -->
  </div>
</template>

<script>
  import {createClient} from '~/plugins/contentful.js'

  const client = createClient()

  export default {
    // `env` is available in the context object
    asyncData ({env}) {
      return Promise.all([
        client.getEntries({
          'content_type': env.CTF_BLOG_POST_TYPE_ID,
          order: '-sys.createdAt',
          "fields.tags":"report",
          limit:5
        }),
        client.getEntries({
          'content_type': env.CTF_BLOG_POST_TYPE_ID,
          order: '-sys.createdAt',
          "fields.tags":"blog",
          limit:5
        })
      ]).then(([reports,blogs]) => {
        // return data that should be available
        // in the template
        return {
          reports: reports.items,
          blogs: blogs.items
        }
      }).catch(console.error)
    }
  }
</script>