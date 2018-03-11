import axios from 'axios'

/*axios基础配置*/
axios.defaults.timeout = 10000;
axios.defaults.baseURL = 'https://www.easy-mock.com/mock/5aa13b980c55ac37d93bbcb4/lanzixun'

/*请求数据*/
export function fetchGet(url, param = '') {
  return new Promise((resolve, reject) => {
    axios.get(url, {params: param})
      .then(response => {
        resolve(response.data)
      }, err => {
        reject(err)
      })
      .catch(error => {
        reject(error)
      })
  })
}
export default {
  /*获取新闻频道*/
  getChannel() {
    return fetchGet('/news/channel')
  },
  /*关键字搜索新闻*/

  /*获取特定频道的新闻*/
  getSpecificChannelNews(params) {
    return fetchGet('/get', params)
  }

}