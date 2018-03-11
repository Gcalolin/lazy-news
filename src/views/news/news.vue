<template>
  <div class="news-wrapper">
    <mt-navbar v-model="channelSelected" class="border-bottom-1px">
      <mt-tab-item v-for="(item, index) in channelList" :key="index" :id="index">{{item}}</mt-tab-item>
    </mt-navbar>
    {{channelSelected}}
    <!-- <news-item></news-item> -->
  <!-- tab-container -->
  <mt-tab-container v-model="channelSelected">
    <mt-tab-container-item :id="channelSelected">
      <news-item v-for="(item, index) in channelNews" :key="index" :newsItem="item"></news-item>
    </mt-tab-container-item>
  </mt-tab-container>
  </div>
</template>

<script type="text/javascript">
import api from '../../api'
import newsItem from '../../components/newsItem'

export default {
  data() {
    return {
      channelSelected: 1,
      channelList: ['头条', '新闻', '财经', '体育', '娱乐', '军事', '教育', '科技', '育儿'],
      // channelList: [],
      channelNews: []
    }
  },
  created() {
    this.getChannel()
    let channel = {
      channel: '头条'
    }
    this.getSpecificChannelNews(channel)
  },
  methods: {
    getChannel() {
      api.getChannel().then(res => {
        // this.channelList = res.results
      })
    },
    getSpecificChannelNews(channel) {
      api.getSpecificChannelNews(channel).then(res => {
        console.log(res.data.result.list)
        this.channelNews = res.data.result.list
      })
    }
  },
  components: {
    'news-item': newsItem
  }
}
</script>
<style lang="scss" scoped>
  .news-wrapper {
    background: #fff;
  }
</style>