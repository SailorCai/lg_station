search.vue<template>
	<section>
      <v-item v-for="item in pageList" :page="item"></v-item>
	</section>
</template>
<script>
import {getAll, postAll} from "@/api/api.js"
import item from "@/components/item/item.vue"
export default {
	data (){
		return {
				pageList: [],
	      firstPage:{
        author: '蔡胜龙',
        title: '四月早安！深圳早安！你是否准备好了迎接四月的挑战？',
        summary: '',
        category: {
        	name: '最新动态'
        },
        bannerUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1522730027573&di=a65285254935d2163be9377a6c913e7b&imgtype=0&src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fphotoblog%2F1704%2F17%2Fc6%2F43595073_1492414025291_mthumb.jpg',
        meta:{
          createAt: '2018年4月1日',
          updateAt: '2018年4月1日',
        },
      }
		}
	},
	methods:{
	    getList() {
	    	var vim = this;
	      getAll('/page/list', {})
	      .then((data)=>{
	        //console.log(data);
	        vim.pageList = data.data;
	        for(var i=0;i<data.data.length;i++){
	        	console.log(typeof vim.pageList[i].meta.updateAt)
	        };
	        console.log(vim.pageList);
	      })
	      .catch((err)=>{
	        console.log(err);
	      });
	    },
	},
  mounted(){
    this.getList();
	},
	components: {
		'v-item': item,
	}
}
</script>
<style scoped>
  @media screen and (min-width:500px){
    .content_panel .home_top_item.blog_item{width:65%;}
    .content_panel .author_pan{width:33%;margin-bottom:2.2rem;}
  }
  @media screen and (max-width:500px){
    .content_panel .home_top_item.blog_item{width:100%;min-height:8rem;}
    .content_panel .author_pan{
      width:100%;
      padding:10px;
      margin-bottom:0rem;
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
    display:flex;
    align-items: stretch;
    box-sizing: border-box;
    justify-content: space-around;
    flex-flow: row wrap;
  }
</style>
