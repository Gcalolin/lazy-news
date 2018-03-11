<template>
<div id="app">
  <transition name="fade" mode="out-in">
    <router-view></router-view>
  </transition>
  <tab-bar v-show="isMainView"></tab-bar>
</div>
</template>

<script>
import tabbar from './components/common/tabbar'
export default {
  name: 'App',
  data() {
    return {
      selected: ''
    }
  },
  computed: {
    isMainView() {
      return this.$route.name === 'NewsIndex' || this.$route.name === 'VedioIndex' || this.$route.name === 'LocaleIndex' || this.$route.name === 'MeIndex'
    }
  },
  components: {
    'tab-bar': tabbar
  },
}
</script>

<style lang="scss">
@import 'scss/common.scss';
@import 'scss/my-mint.scss';
@import 'mint-ui/lib/style.css';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
/*组件切换的动画*/
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
