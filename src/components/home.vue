<template>
  <div class="main">
    <!-- 菜单按钮 -->
    <div class="menu_btn"><i class="iconfont icon-liebiao"></i></div>
    <!-- 主体内容 -->
    <div class="content_panel">
      <div class="author_pan blog_item">
        <div class="search_temp"></div>
        <div class="avatar_temp"></div>
        <div class="func_temp"></div>
      </div>
      <v-item :class="{'home_top_item':true}"></v-item>
      <v-item></v-item>
      <v-item></v-item>
      <v-item></v-item>
    </div>
  </div>
</template>

<script>
import item from "@/components/item/item.vue"
export default {
  name: 'App',
  data() {
    return {

    }
  },
  components: {
    'v-item': item,
  }
}
</script>

<style scope>
  @media screen and (min-width:500px){
    .content_panel .home_top_item.blog_item{width:65%;}
    .content_panel .author_pan{width:30%;}
  }
  .author_pan{
    width:95%;
    background-color:#fff;
    padding:10px;
  }
  .main{
    width:100%;
    height:auto;
    padding-top:8rem;
  }
  .menu_btn{
    padding:10px 20px;
    position:fixed;
    top:1pc;
  }
  .menu_btn .iconfont{
    font-size:20px;
    color:#0E52A3;
  }
  .content_panel{
    width:100%;
    max-width:900px;
    margin:0 auto;
    display:flex;
    align-items: stretch;
    box-sizing: border-box;
    justify-content: space-around;
    flex-flow: row wrap;
  }
</style>
