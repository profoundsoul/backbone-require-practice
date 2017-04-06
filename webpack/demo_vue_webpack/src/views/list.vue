<template>
	<div class="list">
		<div>这是我的list页面</div>
		<ul v-if="list && list.length>0">
			<li v-for="item in list">{{item}}</li>
		</ul>
	</div>
</template>
<style >
	ul{
		list-style: none;
		line-height: 40px;
	}
	.list{
		margin:10px;
		font-size:14px;
	}

	ul li{
		border:1px solid gray;
		text-align: left;
		line-height: 40px;
		padding-left:10px;
		margin-bottom: 5px;
		border-radius: 5px;
	}
	ul li:hover{
		color:#fff;
		background: #234234;
	}
</style>
<script >
	export default {
		data(){
			return {list:[1,3,4,65]}
		}
	}
</script>