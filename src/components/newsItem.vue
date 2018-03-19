<template>
  <div class="news-item-wrapper border-bottom-1px clearfix" @click="goNewsDetail">
    <div class="news-item-container">
      <p class="news-item-title">{{newsItem.title}}</p>
      <p class="news-item-from">
        <span class="company" v-if="newsItem.src">{{newsItem.src}}</span>
        <span class="time" v-if="newsItem.time">{{newsItem.time}}</span>
      </p>
    </div>
    <div v-if="newsItem.pic" class="news-item-img">
      <img :src="newsItem.pic">
    </div>
  </div>
</template>
<script type="text/javascript">
  export default {
    data() {
      return {

      }
    },
    created() {
    },
    props: {
      newsItem: {
        type: Object
      }
    },
    methods: {
      goNewsDetail() {
        this.$router.push({
          name: 'NewsDetail',
          query: {
            newsContent: this.newsItem.content
          }
        })
      }
    }
  }
</script>
<style lang="scss">
.news-item-wrapper {
  margin: 15px;
  padding-bottom: 15px;
  display: flex;
  // box-sizing: border-box;
  .news-item-container {
   .news-item-title {
    font-size: 15px;
    font-weight: bold;
    padding-bottom: 5px;
   }
   .news-item-from {
    font-size: 12px;
    color: #a3a3a3;
    span {
      padding-right: 5px;
    }
   }
  }
  .news-item-img {
    margin-left: 15px;
    img {
      width: 90px;
      height: 60px;
       border-radius: 5px;
    }
  }
}
</style>