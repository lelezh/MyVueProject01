<template>
  <div>
    <v-header></v-header>
    <div class="tab">
      <router-link class="tab-item" to="/goods">商品</router-link>
      <router-link class="tab-item" to="/ratings">评论</router-link>
      <router-link class="tab-item" to="/seller">商家</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  import header from './components/header/header'

  export default {

    components:{
      'v-header':header
    }
  }
</script>

<style>
  .tab{
    display: flex;
    width: 100%;
    height: 40px;
    line-height: 40px;
    border-bottom: 1px solid rgba(7, 17, 27, 0.1);
  }
  .tab > .tab-item{
    flex: 1;
    text-align: center;
    font-size: 14px;
    color: rgb(77, 85, 93)
  }
  .tab .router-link-active{
    color: rgb(240, 20, 20);
  }
</style>
