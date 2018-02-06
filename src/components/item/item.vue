<template>
    <div class="blog_item">
      <div class="item_head">
        <p class="blog_title">
          <a href="">This part walks you through the process of using Mint UI in a webpack project.</a>
        </p>
      </div>
      <div class="item_desc">
        <p>据广告里说，这烟吸入后吐出的烟，会变成治愈系神兽的形态来抚慰你。     <a class="read_yw" href="">阅读全文</a></p>
      </div>
      <div class="item_info meta">
        <div class="authInfo">
          <div class="author_avatar">
            <img src="https://m.qpic.cn/psb?/V14UvRvG0Jhof1/.54Vd6gi6d7yRuYrhYZpMkI3O881SMnanXWAgr7eIFQ!/b/dJUAAAAAAAAA&bo=QAaEA0AGhAMRCT4!&rf=viewer_4" alt="作者头像">
          </div>
          <div>
            <strong>蔡胜龙</strong>
            <span>2018年1月24日</span>
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
  name: 'App'
}
</script>

<style>
  .blog_item{
    width:95%;
    display: flex;
    min-height: 20rem;
    flex-direction: column;
    align-items: stretch;
    border-radius: 0.2rem;
    margin-bottom:45px;
    overflow:hidden;
    box-shadow: 0 2px 2px 0 rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.2), 0 1px 5px 0 rgba(0,0,0,.12);
    justify-content: space-around;
  }
  .blog_item .item_head{
    min-height:10rem;
    padding:1rem;
    background-image:url(http://r.photo.store.qq.com/psb?/V14UvRvG0Jhof1/KOv18zMyKu4Ss78u4E9z5waQj.ekVkJOHQ6.3Z99TOI!/r/dFYBAAAAAAAA);
    background-size: cover;
    display: flex;
    box-sizing: border-box;
    cursor: pointer;
    flex-grow: 1;
    flex-direction: row;
    align-items: flex-end;  
  }
  .blog_item .blog_title{
    font-size:1.5rem;
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
    overflow:hidden;
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
    width:2.2rem;
    height:2.2rem;
    margin-right:0.75rem;
  }
  .author_avatar img{
    width:2.2rem;
    height:2.2rem;
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
