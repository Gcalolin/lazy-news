<template>
  <div v-html="content"></div>
</template>
<script type="text/javascript">
  export default {
    data() {
      return {
        content: ''
      }
    },
    created() {
      this.content = this.$route.query.newsContent
    }
  }
</script>
<style lang="scss" scoped>
  
</style>