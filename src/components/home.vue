<template>
<section>
  <mt-popup position="top" :modal="false" v-model="popupVisible">
    <div class="search_modal"></div>
  </mt-popup>
  <div class="main">
    <!-- 菜单按钮 -->
    <div class="menu_btn menu_btn_left"><i class="iconfont icon-liebiao"></i></div>
    <div class="menu_btn menu_btn_right" @click="popupVisible=!popupVisible"><i class="iconfont icon-sousuosearch79"></i></div>
    <!-- 主体内容 -->
    <div class="content_panel">
      <div class="author_pan blog_item">
        <div class="avatar_temp">
          <a class="avatar_wrapper" href=""><img src="http://m.qpic.cn/psb?/V14UvRvG0Jhof1/Z2SHgfF7GS4vvQJJleWGcZSk9xx41i6XaCWC*K666X0!/b/dGoBAAAAAAAA&bo=QAaEA0AGhAMROQ4!&rf=viewer_4" alt=""></a>
        </div>
        <div class="func_temp">
          <div class="csl_blog">
            <strong>蔡胜龙的博客</strong>
          </div>
          <div class="csl_func">
            <span class="icon_btn"><i class="iconfont icon-tiyu-kualan"></i></span>
            <span class="icon_btn"><i class="iconfont icon-78lvxing"></i></span>
          </div>
        </div>
      </div>
      <v-item :class="{'home_top_item':true}"></v-item>
      <v-item></v-item>
      <v-item></v-item>
      <v-item></v-item>
    </div>
  </div>
  <footer>
    <div class="csl_any"><a class="icon_btn" href=""><i class="iconfont icon-GitHub"></i></a></div>
    <div class="csl_right">Copyright © 2015 - 2018 蔡胜龙的博客</div>
    <div class="csl_other"></div>
  </footer>
</section>
</template>

<script>
import item from "@/components/item/item.vue"
export default {
  name: 'App',
  data() {
    return {
      popupVisible:false,
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
    .content_panel .author_pan{width:33%;margin-bottom:2.2rem;}
  }
  @media screen and (max-width:500px){
    .content_panel .home_top_item.blog_item{width:100%;min-height:8rem;}
    .content_panel .author_pan{
      width:100%;
      padding:10px;
      margin-bottom:0;
    }
  }
  .author_pan{
    background-color:#fff;
    box-sizing:border-box;
  }
  .main{
    width:100%;
    height:auto;
    padding-top:6rem;
  }
  .menu_btn{
    padding:10px 20px;
    position:fixed;
    top:1pc;
    cursor:pointer;
  }
  .menu_btn .iconfont{
    font-size:20px;
    color:#0E52A3;
  }
  .menu_btn_right{
    right:0;
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

  .avatar_temp{
    display:flex;
    flex-grow: 1;
    flex-direction: column;
    justify-content:space-around;
  }
  .avatar_wrapper{
    display:inline-block;
    width:10rem;
    height:10rem;
    margin:0 auto;
    border-radius:50%;
    overflow:hidden;
  }
  .avatar_wrapper img{
    width:100%;
    height:100%;
  }
  .func_temp{
    padding:0.8rem;
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    font-size:15px;
  }
  .func_temp .csl_blog{
    margin-right:1rem;
  }
  .icon_btn{
    display:inline-block;
    padding:0 0.3rem;
    cursor:pointer;
  }
  .icon_btn .iconfont{
    font-size:25px;
  }
  footer{
    display:flex;
    flex-direction:row;
    justify-content: space-between;
    padding:2rem;
    background:#fff;
    margin-top:2rem;
  }
  footer .csl_right{
    font-size:14px;
    color:#999;
  }
</style>
