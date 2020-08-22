import jsondata from '@/assets/json/data.json'
import {createClient} from '~/plugins/contentful.js'
const client = createClient()

export const state = () => ({
  data: jsondata,
  report:jsondata.report,
  tech:jsondata.tech,
  blog:jsondata.blog,
  target:jsondata.target,
  posts:[],
  blogs:[],
  techs:[]
})

export const mutations = {
  setPosts(state, item) {
    state.posts = item
  },
  setBlogs(state, item) {
    state.blogs = item
  },
  setTechs(state, item) {
    state.techs = item
  }

}

export const actions = {
  async getPosts({ commit }) {
    await client.getEntries({
      content_type: "blogPost",
      order: '-fields.publishDate',
      "fields.tags":"report"

    }).then(res =>
      commit('setPosts', res.items)
    ).catch(console.error)
  },
  async getBlogs({ commit }) {
    await client.getEntries({
      content_type: "blogPost",
      order: '-fields.publishDate',
      "fields.tags":"blog"

    }).then(res =>
      commit('setBlogs', res.items)
    ).catch(console.error)
  },
  async getTechs({ commit }) {
    await client.getEntries({
      content_type: "blogPost",
      order: '-fields.publishDate',
      "fields.tags":"tech"

    }).then(res =>
      commit('setTechs', res.items)
    ).catch(console.error)
  }
}