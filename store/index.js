import jsondata from '@/assets/json/data.json'

export const state = () => ({
  data: jsondata,
  report:jsondata.report,
  tech:jsondata.tech,
  blog:jsondata.blog,
  target:jsondata.target,
})
  