<template>
<section>
  <!-- 搜索弹框 -->
  <mt-popup position="top" :modal="false" v-model="popupTopVisible" style="width:100%;background:none;">
    <div class="search_modal">
      <div class="search_wrapper">
        <input type="text" class="input_text">
        <div class="search_btn"><i class="iconfont icon-sousuosearch79"></i></div>
        <div class="search_btn bg_danger" @click="popupTopVisible=false"><i class="iconfont icon-quxiao"></i></div>
      </div>
    </div>
  </mt-popup>
  <!-- 导航弹框 -->
  <mt-popup position="left" :modal="true" v-model="popupLeftVisible" style="width:70%;background:#fff;max-width:300px;height:100%;">
    <div class="aside_modal">
      <div class="aside_head">
      <div class="menu_btn menu_btn_aside" @click="popupLeftVisible=!popupLeftVisible"><i class="iconfont icon-fanhui"></i></div>
        <div class="aside_avatar"><img src="@/../static/images/logan.jpg"></div>
        <div class="aside_title">蔡胜龙的博客</div>
      </div>
      <div class="menu_content">
        <div class="menu_wrapper" :class="{'active': menuIndex.index}">
          <div class="menu_fa_item" @click="menuChange('index')"><i class="iconfont icon-home"></i>&nbsp;&nbsp;首页</div>
        </div>
        <div class="menu_wrapper" :class="{'active': menuIndex.sort}">
          <div class="menu_fa_item" @click="menuChange('sort')">
            <i class="iconfont icon-leimupinleifenleileibie2"></i>&nbsp;&nbsp;分类
            <i class="iconfont icon-arrow-right-copy-copy-copy" style="float:right"></i>
          </div>
          <div class="menu_ch_item"><i class="iconfont icon-leijishufuwux"></i>&nbsp;&nbsp;技术栈</div>
          <div class="menu_ch_item"><i class="iconfont icon-78lvxing"></i>&nbsp;&nbsp;生活</div>
          <div class="menu_ch_item"><i class="iconfont icon-Trekking"></i>&nbsp;&nbsp;旅行</div>
        </div>
        <div class="menu_wrapper" :class="{'active': menuIndex.about}">
          <div class="menu_fa_item" @click="menuChange('about')"><i class="iconfont icon-ren"></i>&nbsp;&nbsp;关于</div>
        </div>
        <div class="menu_wrapper" :class="{'active': menuIndex.friurl}">
          <div class="menu_fa_item" @click="menuChange('friurl')">
            <i class="iconfont icon-lianjie1"></i>&nbsp;&nbsp;友情链接
            <i class="iconfont icon-arrow-right-copy-copy-copy" style="float:right"></i>
          </div>
          <a class="menu_ch_item" href="@/../static/html/about.html"><i class="iconfont icon-leijishufuwux"></i>&nbsp;&nbsp;关于</a>
        </div>
      </div>
    </div>
  </mt-popup>
  <div class="main">
    <!-- 菜单按钮 -->
    <div class="menu_btn menu_btn_left" @click="popupLeftVisible=!popupLeftVisible"><i class="iconfont icon-liebiao"></i></div>
    <div class="menu_btn menu_btn_right" @click="popupTopVisible=!popupTopVisible"><i class="iconfont icon-sousuosearch79"></i></div>
    <!-- 主体内容 -->
    <div class="content_panel">
      <div class="author_pan blog_item">
        <div class="avatar_temp">
          <a class="avatar_wrapper" href=""><img src="@/../static/images/logan.jpg" alt=""></a>
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
      popupTopVisible: false,
      popupLeftVisible: false,
      menuIndex: {
        index: false,
        sort: false,
        about: false,
        friurl: false
      }
    }
  },
  methods: {
    menuChange(name) {
      console.log(666);
      for(var key in this.menuIndex){
        if(key!=name){
          this.menuIndex[key] = false;
        }
      };
      this.menuIndex[name] = !this.menuIndex[name];
    },
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
    font-size:1.5rem;
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
  .search_modal{
    width:100%;
    height:4rem;
    background:rgba(0,0,0,0.6);
    display:flex;
    justify-content: space-around;
  }
  .search_wrapper{
    display:flex;
    width:90%;max-width: 900px;
    padding:1rem;
  }
  .input_text{
    flex-grow: 1;
    padding:0 10px;
    border-radius:5px;
    border:none;
  }
  .search_btn{
    display:inline-block;
    padding:0 1rem;
    height:2rem;
    line-height:2rem;
    font-size:0.7rem;
    background:#409EFF;
    box-sizing:border-box;
    cursor:pointer;
    color:#fff;
    border-radius:2px;
    margin:0 2px;
  }
  .search_btn .iconfont{
    font-size:0.7rem;
  }
  .bg_danger{background-color:#F56C6C !important;}
  .aside_modal{
    width:100%;
    background:#fff;
    min-height:100%;
    display:flex;
    flex-direction: column;
  }
  .aside_head{
    display:flex;
    flex-direction: column;
    height:12rem;
    background:#333;
    box-sizing:border-box;
    padding-top:30px;
  }
  .aside_avatar{
    padding:0 1rem;
    flex-grow:1;
    display:flex;
    flex-direction: column;
    justify-content: flex-end;
  }
  .aside_avatar img{
    border-radius:50%;
    width:6rem;
    height:6rem;
  }
  .aside_title{
    padding:0.5rem 1rem;
    font-size:0.7rem;
    color:#fff;
  }
  .menu_btn_aside{
    top:4rem;
    right:0.5rem;
  }
  .menu_btn_aside .iconfont{color:#fff;}
  .menu_content{
    padding:1rem 0;
  }
  .menu_content *{
    cursor:pointer;
  }
  .menu_content .menu_wrapper {
    display:flex;
    flex-direction: column;
  }
  .menu_content .menu_wrapper div:hover{
    background:#666;
  }
  .menu_wrapper .menu_fa_item{
    font-size:16px;
    padding:5px 1rem;
  }
  .menu_wrapper .menu_ch_item{
    font-size:13px;
    padding:5px 1.5rem;
    display:none;
  }
  .menu_wrapper.active .menu_ch_item{
    font-size:13px;
    padding:5px 1.5rem;
    display:block;
  }
  .menu_wrapper .menu_ch_item .iconfont{
    vertical-align: middle;
    font-size:15px;
    margin-right:1rem;
  }
  .menu_wrapper .menu_fa_item .iconfont{
    vertical-align: middle;
    font-size:20px;
    margin-right:1rem;
  }
</style>
