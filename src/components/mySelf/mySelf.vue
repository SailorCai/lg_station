<template>
    <div class="blog_item">
      <div class="item_head">
        <p class="blog_title">
          <a href="">关于</a>
        </p>
      </div>
      <div class="item_info meta">
        <div class="authInfo">
          <div class="author_avatar">
            <img src="@/../static/images/logan.jpg" alt="作者头像">
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
      <div class="item_desc self_content">
        <p>博主，原名蔡胜龙。一个出道三年的程序猿</p>
        <p>据广告里说，这烟吸入后吐出的烟，会变成治愈系神兽的形态来抚慰你。据广告里说，这烟吸入后吐出的烟，会变成治愈系神兽的形态来抚慰你。据广告里说，这烟吸入后吐出的烟，会变成治愈系神兽的形态来抚慰你。</p>
        <p>据广告里说，这烟吸入后吐出的烟，会变成治愈系神兽的形态来抚慰你。据广告里说，这烟吸入后吐出的烟，会变成治愈系神兽的形态来抚慰你。据广告里说，这烟吸入后吐出的烟，会变成治愈系神兽的形态来抚慰你。</p>
      </div>
      <div class="item_desc">
        <div class="comment_area">
          <div class="mail_wrap">
            <input type="text" placeholder="昵称">
            <input type="text" placeholder="邮箱">
            <input type="text" placeholder="网址">
          </div>
          <textarea name="" id="" cols="30" rows="10" class="comment_text" placeholder="说点什么吧..."></textarea>
          <div class="tool_bar">
            <div class="send_btn">回复</div>
          </div>
          <div class="comment_conten">
            <div class="comment_top"><span id="comment_num">2</span>条评论</div>
            <!-- 评论区内容 -->
            <div class="comment_items">
              <div class="comment_item">
                <div class="visitor_info">
                  <div class="visitor_avatar"><img src="@/../static/images/logan.jpg" alt=""></div>
                  <div class="visitor_name">蔡胜龙</div>
                  <div class="visitor_tool">Safari 11.0</div>
                  <div class="visitor_sys">iOS 11.1.2</div>
                </div>
                <div class="visitor_content">
                  <span class="to_someone">@蔡胜龙</span>
                  <span class="visitor_text">你好，怎么联系你呢？</span>
                  <div class="visitor_bottom">
                    <span class="comment_date">2016年3月4日</span>
                    <span class="reply_btn">回复</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: ''
}
</script>

<style scoped>
  @media screen and (min-width:500px){
    .mail_wrap input{
      border:none;
      width:33.3%;
    }
  }
  @media screen and (max-width:500px){
    .mail_wrap input{
      border:none;
      width:100%;
    }
    .blog_item{
      width:100%;
    }
    .visitor_tool,.visitor_sys{
      display:none;
    }
  }
  section{
    width:100%;
    margin:0 auto;
    display:flex;
    align-items: stretch;
    box-sizing: border-box;
    justify-content: space-around;
    flex-flow: row wrap;
  }
  .blog_item{
    width:100%;
    height:auto !important;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    border-radius: 0.2rem;
    margin-bottom:2.2rem;
    overflow:hidden;
    box-shadow: 0 2px 2px 0 rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.2), 0 1px 5px 0 rgba(0,0,0,.12);
    justify-content: space-around;
  }
  .blog_item .item_head{
    min-height:15rem !important;
    padding:1rem;
    background-image:url(https://api.i-meto.com/bing?color=multi);
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
  .self_content p{
    line-height:2rem;
    font-size:0.8rem;
  }
  .mail_wrap{
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .mail_wrap input{
    line-height:40px;
    border:none;
    outline:none;
    border-bottom:1px dashed #DEDEDE;
  }
  .mail_wrap input:focus{
    border-bottom:1px dashed red;
  }
  .comment_area{
    display:flex;
    flex-direction:column;
    border:1px solid #F0F0F0;
    padding:1rem 0.5rem;
  }
  .comment_text{
    width:100%;
    min-height:7rem;
    box-sizing: border-box;
    border:none;
    outline:none;
    padding:0.5rem;
  }
  .tool_bar {
    overflow:hidden;
    padding:0.5rem 0;
    border-bottom:1px dashed #DEDEDE;
  }
  .send_btn{
    display:inline-block;
    padding:0 0.5rem;
    line-height:1.5rem;
    border-radius:0.75rem;
    background:#409EFF;
    color:#fff;
    cursor:pointer;
    float:right;
  }
  .comment_top{
    line-height:3rem;
    font-size:0.7rem;
    color:#666;
  }
  #comment_num{
    font-weight:bolder;
    font-size:0.8rem;
    color:red;
  }
  .comment_items{
    display:flex;
    flex-direction: column;
  }
  .comment_items .comment_item{
    width:100%;
    display:flex;
    flex-direction: column;
  }
  .visitor_info{
    display:flex;
    flex-direction: row;
    justify-content: flex-start;
  }
  .visitor_info>*{
    margin:0 5px;
  }
  .visitor_info .visitor_avatar,.visitor_info .visitor_avatar img{
    width:44px;
    height:44px;
  }
  .visitor_name{
    color:#333;
    line-height:30px;
    height:30px;
    font-size:13px;
  }
  .visitor_tool, .visitor_sys{
    padding:0 10px;
    background:#EDEDED;
    color:#999;
    line-height:30px;
    height:30px;
    font-size:12px;
    border-radius:5px;
  }
  .visitor_content{
    padding:10px 0 10px 44px;
  }
  .to_someone{
    display:inline-block;
    color:#BAC2CA;
    font-size:12px;
    line-height:25px;
  }
  .visitor_text{
    display:inline-block;
    text-indent:1em;
    color:#666;
    font-size:14px;
    line-height:25px;
  }
  .visitor_bottom{
    line-height:50px;
  }
  .comment_date{
    display:inline-block;
    color:#BAC2CA;
    font-size:12px;
    line-height:25px;
  }
  .reply_btn{
    cursor:pointer;
    display:inline-block;
    color:red;
    font-size:14px;
    line-height:25px;
    cursor:pointer;
    margin-left:10px;
  }
</style>
