<template>
  <div class="tabbar-wrapper">
    <ul class="tarbar-container border-top-1px">
      <router-link tag="li" class="tarbar-item" :to="{name: 'NewsIndex'}" exact>
        <i class="iconfont icon-iconfontshouji"></i>
        资讯
      </router-link>
      <router-link tag="li" class="tarbar-item" :to="{name: 'VedioIndex'}">
        <i class="iconfont icon-play"></i>
        视频
      </router-link>
      <router-link tag="li" class="tarbar-item" :to="{name: 'LocaleIndex'}">
        <i class="iconfont icon-wxbdingwei"></i>
        深圳
      </router-link>
      <router-link tag="li" class="tarbar-item" :to="{name: 'MeIndex'}">
        <i class="iconfont icon-account"></i>
        我的
      </router-link>
    </ul>
  </div>
</template>

<script type="text/javascript">
  export default {
    data() {
      return {}
    }
  }
</script>

<style lang="scss" scoped>
@import '../../scss/mixin.scss';

.tarbar-container {
  left: 0;
  right: 0;
  bottom: 0;
  height: px2rem($tabbarHeight);
  background: #fff;
  box-shadow: 0 2px 5px rgba(125, 125, 125, 0.8);
  position: fixed;
  display: flex;
  flex-direction: row;
  padding: 3px 0;
  margin: 0 auto;
  max-width: 414px;
  margin: 0 auto;
  z-index: 500;
  box-sizing: border-box;
  /*基础导航item*/
  .tarbar-item {
    flex: 0 1 33.3%;
    text-align: center;
    font-size: 12px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    color: #808080;
    /*激活状态*/
    &.active {
      color: #f13329;
    }
    /*公用i标签*/
    i {
      background-repeat: no-repeat;
      font-size: 18px;
    }
  }
}
</style>