<template>
<div class="editor_wrapper">
	<div class="editor_filed">
		<span class="attr_name">文章标题：</span>
		<input type="text" name="" class="editor_input" v-model="form.title">
	</div>
	<div class="editor_filed">
		<span class="attr_name">banner地址：</span>
		<input type="text" name="" class="editor_input" v-model="form.bannerUrl">
	</div>
	<div class="editor_filed">
		<span class="attr_name">作者：</span>
		<input type="text" name="" class="editor_input" v-model="form.author">
	</div>
	<div class="editor_filed">
		<span class="attr_name">内容概括：</span>
		<input type="text" name="" class="editor_input" v-model="form.summary">
	</div>
  <div class="editor_filed">
    <span class="attr_name">文章分类：</span>
    <input type="text" name="" class="editor_input" v-model="form.categoryName">
  </div>
  <div class="editor_filed">
    <span class="attr_name">分类选择：</span>
    <label for="" v-for="item in categorys"><input type="radio"></label>
  </div>
	<div class="editor_filed">
		<span class="attr_name">文章内容：</span>
	</div>
	<div ref="ed_target"></div>
	<div class="btn_wrapper">
		<mt-button type="primary" size="normal" @click="submit">提交</mt-button>
	</div>
</div>
</template>

<script>
import E from 'wangeditor';
import {postAll, getAll} from "@/api/api.js";
export default {
  name: '',
  data (){
  	return {
  		form:{
  			title: '',
  			bannerUrl: '',
  			author: '',
  			summary: '',
  			content: '',
        categoryName: '',
  		},
      categorys:[],
  	}
  },
  methods: {
  	submit() {
  		this.form.content = this.editor.txt.html();
  		console.log(this.form);
  		postAll('/page/save', this.form)
  		.then(function(data){
  			console.log(data);
  		})
  		.catch(function(err){
  			console.log(err);
  		});
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
    this.editor = new E(this.$refs.ed_target)
    this.editor.customConfig.onchange = (html) => {
      this.editorContent = html;
    }
    this.editor.create();
    this.getCategory();  
  }
}
</script>

<style>
	.editor_wrapper{
		width:100%;
		background:#fff;
		padding:30px 10px;
	}
	.editor_filed{
		width:100%;
		padding:10px 0;
		display:flex;
		flex-direction:row;
		font-size:14px;
		box-sizing: border-box;
		line-height:30px;
	}
	.attr_name{
		width:100px;
		text-align: right;
	}
	.editor_input{
		flex-grow:1;
		border:none;
		border-bottom:1px dashed #666;
		color:#666;
		outline: none;
	}
	.editor_select{
		width:200px;
	}
	.btn_wrapper{
		padding:30px;
		text-align:right;
	}
	.btn_wrapper button{
		width:150px;
		cursor:pointer;
	}
</style>
