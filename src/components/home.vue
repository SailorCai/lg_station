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
          <div class="menu_ch_item" v-for="(cat,index) in categorys"><i class="iconfont" :class="icons[index]"></i>&nbsp;&nbsp;{{cat.name}}</div>
        </div>
        <div class="menu_wrapper" :class="{'active': menuIndex.about}">
          <div class="menu_fa_item" @click="menuChange('about')"><i class="iconfont icon-ren"></i>&nbsp;&nbsp;关于</div>
        </div>
        <div class="menu_wrapper" :class="{'active': menuIndex.friurl}">
          <div class="menu_fa_item" @click="menuChange('friurl')">
            <i class="iconfont icon-lianjie1"></i>&nbsp;&nbsp;友情链接
            <i class="iconfont icon-arrow-right-copy-copy-copy" style="float:right"></i>
          </div>
          <a class="menu_ch_item" href="http://www.gnnu.cn/" target="_blank"><i class="iconfont icon-lianjie1"></i>&nbsp;&nbsp;赣南师范大学</a>
          <a class="menu_ch_item" href="http://www.jxln.ccoo.cn/" target="_blank"><i class="iconfont icon-lianjie1"></i>&nbsp;&nbsp;龙南信息网</a>
          <a class="menu_ch_item" href="http://dz.cppfoto.com/news/detail.aspx?id=2097" target="_blank"><i class="iconfont icon-lianjie1"></i>&nbsp;&nbsp;围屋风情</a>
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
      <router-view/>
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
import {getAll, postAll} from "@/api/api.js"
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
      },
      categorys:[],
      icons:['icon-leijishufuwux', 'icon-78lvxing', 'icon-Trekking']
    }
  },
  methods: {
    menuChange(name) {
      console.log('hahahahah');
      for(var key in this.menuIndex){
        if(key!=name){
          this.menuIndex[key] = false;
        }
      };
      this.menuIndex[name] = !this.menuIndex[name];
      if(name=="about"){
        location.href="@/../static/html/about.html"
        this.popupLeftVisible=false;
      }else if(name=="index"){
        this.$router.push('/main');
        this.popupLeftVisible=false;
      };
    },
    getCategory() {
      var vim = this;
      getAll('/category/all', {})
      .then(function(data){
        console.log(data);
        vim.categorys = data.data;
      })
      .catch(function(err){
        console.log(err);
      });
    },
  },
  mounted(){
    this.getCategory();
  },
  components: {
    //'v-item': item,
  }
}
</script>

<style>
  @media screen and (min-width:500px){
    .content_panel .home_top_item.blog_item{width:65%;}
    .content_panel .author_pan{width:33%;margin-bottom:2.2rem;}
  }
  @media screen and (max-width:500px){
    .content_panel .home_top_item.blog_item{width:100%;max-height:15rem !important;}
    .content_panel .author_pan{
      width:100%;
      padding:10px;
      margin-bottom:0;
    }
    footer{
      display:flex;
      flex-direction:column !important;
      justify-content: center !important;
      padding:2rem;
      background:#fff;
      margin-top:2rem;
    }
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
    width:100%;
    display:flex;
    flex-direction:row;
    justify-content: space-between;
    text-align:center;
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
    text-decoration: none;
    color:#51606E;
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
  section{
    width:100%;
    display:flex;
    align-items: stretch;
    box-sizing: border-box;
    justify-content: space-around;
    flex-flow: row wrap;
  }
</style>
