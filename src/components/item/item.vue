<template>
    <div class="blog_item">
      <div class="item_head" ref="item_head" :style="bkStyle">
        <img :src="page.bannerUrl" alt="">
        <p class="blog_title">
          <a href="">{{page.title}}</a>
        </p>
      </div>
      <div class="item_desc">
        <p>{{page.summary}}     <a class="read_yw" href="">阅读全文</a></p>
      </div>
      <div class="item_info meta">
        <div class="authInfo">
          <div class="author_avatar">
            <img src="@/../static/images/logan.jpg" alt="作者头像">
          </div>
          <div>
            <strong>{{page.author}}</strong>
            <span>{{page.meta.createAt}}</span>
          </div>
        </div>
        <div class="item_right_menu">
          <span>技术栈</span>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: '',
  props: {
    page:{
      type: Object,
    }
  },
  data() {
    return{
      bkStyle:{'backgound-image':'url('+this.page.bannerUrl+')'}
    };
  },
  mounted() {
    this.$nextTick(function () {
      
    });
  },
}
</script>

<style>
  .blog_item{
    width:95%;
    height:20rem;
    display: flex;
    min-height: 20rem;
    flex-direction: column;
    align-items: stretch;
    border-radius: 0.2rem;
    margin-bottom:2.2rem;
    overflow:hidden;
    box-shadow: 0 2px 2px 0 rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.2), 0 1px 5px 0 rgba(0,0,0,.12);
    justify-content: space-around;
  }
  .home_top_item.blog_item .item_desc{display:none;}
  .blog_item .item_head{
    overflow:hidden;
    position:relative;
    min-height:9rem;
    /*background-image:url(https://api.i-meto.com/bing?color=multi);*/
    background-size: cover;
    box-sizing: border-box;
    cursor: pointer;
    flex-grow: 1;
  }
  .blog_item .item_head img{
    width:100%;
  }

  .blog_item .blog_title{
    padding:1rem;
    font-size:1.5rem;
    position:absolute;
    bottom:0;
    width:100%;
  }
  .blog_item .item_desc{
    padding:1.3rem;
    background-color:#fff;
    font-size:0.7rem;
  }
  .item_desc .read_yw{
    color:#94F28E;
  }
  .blog_item .item_info{
    background-color:#fff;
    border-top:1px solid rgba(0, 0, 0, .1);
  }
  .item_info .authInfo{
    padding:0.75rem;
    flex-direction: row;
    font-size:0.7rem;
    color: #757575!important;
    float:left;
  }
  .author_avatar{
    width:44px;
    height:44px;
    margin-right:0.75rem;
  }
  .author_avatar img{
    width:44px;
    height:44px;
  }
  .item_info .item_right_menu{
    padding:1.1rem;
    color:#94F28E;
    float:right;
    font-size:0.8rem;
  }
  .blog_item .blog_title{
    color:#fff;
  }
  .blog_item .blog_title a{
    text-decoration: none;
    color:#fff;
    text-align:left;
  }
</style>
