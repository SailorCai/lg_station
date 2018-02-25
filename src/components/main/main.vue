<template>
	<section>
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
	</section>
</template>
<script>
	import item from "@/components/item/item.vue"
	export default {
		data (){
			return {

			}
		},
		components: {
		'v-item': item,
		}
	}
</script>
<style>
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
  section{
    width:100%;
    margin:0 auto;
    display:flex;
    align-items: stretch;
    box-sizing: border-box;
    justify-content: space-around;
    flex-flow: row wrap;
  }
</style>
