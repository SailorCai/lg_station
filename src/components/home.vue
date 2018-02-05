<template>
  <div class="main">
    <!-- 菜单按钮 -->
    <div class="menu_btn"><i class="iconfont icon-liebiao"></i></div>
    <!-- 主体内容 -->
    <div class="content_panel">
      <div class="blog_item">
        <div class="item_head">
          <p class="blog_title">
            <a href="">This part walks you through the process of using Mint UI in a webpack project.</a>
          </p>
        </div>
        <div class="item_desc"></div>
        <div class="item_info"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scope>
  @media screen and (max-width:500px){
    .blog_item .blog_title{
      font-size:22px;
    }
    .blog_item .blog_title a{}
  }
  /*pc样式*/
  @media screen and (min-width:500px){
    .blog_item .blog_title{
      font-size:30px;
    }
  }
  .blog_item .blog_title{
    color:#fff;
  }
  .blog_item .blog_title a{
    text-decoration: none;
    color:#fff;
    text-align:left;
  }
  .main{
    width:100%;
    height:auto;
    padding-top:160px;
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
  }
  .blog_item{
    width:95%;
    display: flex;
    min-height: 25pc;
    flex-direction: column;
    align-items: stretch;
    border-radius: 2px;
    margin-bottom:45px;
    box-shadow: 0 2px 2px 0 rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.2), 0 1px 5px 0 rgba(0,0,0,.12);
  }
  .blog_item .item_head{
    min-height:200px;
    padding:20px;
    background-image:url(http://r.photo.store.qq.com/psb?/V14UvRvG0Jhof1/KOv18zMyKu4Ss78u4E9z5waQj.ekVkJOHQ6.3Z99TOI!/r/dFYBAAAAAAAA);
    background-size: cover;
    display: flex;
    box-sizing: border-box;
    cursor: pointer;
    flex-grow: 1;
    flex-direction: row;
    align-items: flex-end;  
  }
</style>
