const fs = require('fs')
const jsonData = JSON.parse(fs.readFileSync('assets/json/data.json'))
const config = require('./contentful.json')

const contentful = require('contentful');
const client = contentful.createClient({
  space: config.CTF_SPACE_ID,
  accessToken: config.CTF_CDA_ACCESS_TOKEN
});

export default {

  env: {
    CTF_SPACE_ID: config.CTF_SPACE_ID,
    CTF_CDA_ACCESS_TOKEN: config.CTF_CDA_ACCESS_TOKEN,
    CTF_BLOG_POST_TYPE_ID: config.CTF_BLOG_POST_TYPE_ID,
    CTF_REPORT_TYPE_ID: config.CTF_REPORT_TYPE_ID,

  },
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'universal',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'static',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: 'タイガ★ログ',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '３０歳までは真面目に生きようと思って、やったこととかの記録。' },
      { hid: 'og:site_name', property: 'og:site_name', content: 'タイガ★ログ' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: 'https://taiga.pw' },
      { hid: 'og:title', property: 'og:title', content: 'タイガ★ログ' },
      { hid: 'og:description', property: 'og:description', content: '３０歳までは真面目に生きようと思って、やったこととかの記録。' },
      { hid: 'og:image', property: 'og:image', content: 'https://firebasestorage.googleapis.com/v0/b/blog-1532b.appspot.com/o/ogp.jpg?alt=media&token=328736a1-cc29-47c1-854b-0bf7d03bd0c8' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Global CSS
  */
  css: [
    '@/assets/css/clean-blog.min.css',
    "@/assets/css/bootstrap.min.css",
    "@/assets/css/all.min.css",
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
    { src: '~plugins/ga.js', mode: 'client' }
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxt/typescript-build'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc: https://github.com/nuxt/content
    '@nuxt/content',
    '@nuxtjs/markdownit'
  ],
  markdownit: {
    injected: true
  },
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {},
  /*
  ** Content module configuration
  ** See https://content.nuxtjs.org/configuration
  */
  content: {},
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
  },
  generate:{
    routes() {
      return Promise.all([
         client.getEntries({
           'content_type': config.CTF_BLOG_POST_TYPE_ID,
           order: '-sys.createdAt',
           "fields.tags":"report",
         }),
         client.getEntries({
           'content_type': config.CTF_BLOG_POST_TYPE_ID,
           order: '-sys.createdAt',
           "fields.tags":"blog",
         })
      ]).then(([{ items: hogeItems }, { items: hugaItems }]) => {
        const hoge = hogeItems.map((item) => {
          return {
            route: `/report/${item.fields.slug}`,
            payload: item
          }
        })
        const huga = hugaItems.map((item) => {
          return {
            route: `/blog/${item.fields.slug}`,
            payload: item
          }
        })
        return [].concat(hoge, huga)
      })
    }
  }
}
