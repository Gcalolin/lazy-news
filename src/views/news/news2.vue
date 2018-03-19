<template>
  <div class="news-wrapper">
    <!-- 顶部导航 -->
    <div class="lr_nb">
      <div class="slider_wrap line">
        <div class="wx_items">
          <div class="item_cell" v-for="(item, index) in channelList" :class="{current: currentIndex === index}" :key="index" @click="chooseChannel(index)">
          <span>{{item}}</span>
        </div>
        </div>
      </div>
    </div>
    <div class="lr_nb_after"></div> 
    <!-- 新闻列表 -->
    <div class="news-container">
      <div 
        v-for="(item, index) in channelList" 
        :key="index" 
        v-if="currentIndex === index"
        v-infinite-scroll="loadMore"
        infinite-scroll-disabled="loading"
        infinite-scroll-distance="10">
        <news-item v-for="(item, index) in channelNews" :key="index" :newsItem="item"></news-item>
        <div class="more_loading">
          <mt-spinner type="triple-bounce" color="#f13329" class="loading" v-show="moreLoading&&!allLoaded"></mt-spinner>
          <span class="all-loaded" v-show="allLoaded">数据加载完毕</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
  import api from '../../api'
  import newsItem from '../../components/newsItem'
  export default {
    data() {
      return {
        /*所有的新闻频道*/
        // channelList: [],
        channelList: ['头条', '新闻', '财经'],
        currentIndex: 0,
        channelNews: [],
        params: {
          currentPage: 1,
          /*当前的频道*/
          currentChannel: '头条'
        },
        totalPages: null,
        loading: false,
        moreLoading: false,
        /*是否全部加载完毕*/
        allLoaded: false, 
      }
    },
    created() {
      /*获取新闻频道*/
      // this.getChannel()
      this.getSpecificChannelNews()
    },
    methods: {
      getChannel() {
        api.getChannel().then(res => {
          this.channelList = res.result
        })
      },
      /*切换频道*/
      chooseChannel(index) {
        this.currentIndex = index
        /*重置页数*/
        this.params.currentPage = 1

        this.params.currentChannel = this.channelList[index]
        this.getSpecificChannelNews(this.params)
      },
      /*获取特定频道的新闻*/
      getSpecificChannelNews() {
        api.getSpecificChannelNews(this.params).then(res => {
          console.log(res.data.result.list)
          this.channelNews = res.data.result.list
          this.totalPages = res.meta.pagination.total_pages
          if (this.totalPages === 1) {
            this.allLoaded = true
            this.loading = false
          }
        })
      },
      loadMore() {
        if (this.params.currentPage === this.totalPages) {
          this.allLoaded = true
          return
        }
        this.moreLoading = true
        console.log('loadmore被触发了')
        this.params.currentPage += 1
        api.getSpecificChannelNews(this.params).then(res => {
          this.channelNews = this.channelNews.concat(res.data.result.list)
          // this.moreLoading = false
        })
      }
    },
    components: {
      'news-item': newsItem
    }
  }
</script>
<style lang="scss" scoped>
  @import '../../scss/mixin.scss';
  .news-wrapper {
    margin-bottom: px2rem(40);
  }
  .loading,.all-loaded {
    width: 100%;
    text-align: center;
    margin: px2rem(8) 0;
    color: #a3a3a3;
  }
  /*滚动水平导航栏 start*/  
  .lr_nb{border-bottom:1px solid #E8E8E8;border-top:1px solid #E8E8E8;height:40px;line-height:40px;width:100%;position:absolute;background:#fff;padding: 0px 10px;box-sizing:border-box;z-index:1;max-width:1080px;opacity:1;top:0;-webkit-transition:.3s all;transition:.3s all}  
  .lr_nb .slider_wrap.line{overflow:hidden;overflow-x:scroll;width:100%;-webkit-overflow-scrolling:touch;}  
  .lr_nb .slider_wrap.line .item_cell{display:inline-block;margin: 0px 10px;;overflow:hidden;position:relative;}  
  .lr_nb .slider_wrap.box{overflow:hidden;width:100%}  
  .lr_nb .slider_wrap::-webkit-scrollbar{display:none}  
  .lr_nb .wx_items{white-space:nowrap}  
  .lr_nb .wx_items span{color:#666;font-size: 15px; white-space:nowrap;display:block;-webkit-tap-highlight-color:rgba(0,0,0,0);text-align:center;cursor:pointer}  
  .lr_nb .wx_items .current span,.lr_nb .wx_items .current a:visited,.lr_nb .wx_items .current a:link,.lr_nb .wx_items .current a:hover,.lr_nb .wx_items .current a:focus{color:#f13329;}  
  .lr_nb_after{height:40px;display:block;clear:both;}  
  /*滚动水平导航栏 end*/  
</style>