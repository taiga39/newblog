export default async ({ store }) => {
    if (!store.state.posts.length) await store.dispatch('getPosts')
    if (!store.state.blogs.length) await store.dispatch('getBlogs')
    if (!store.state.techs.length) await store.dispatch('getTechs')
}