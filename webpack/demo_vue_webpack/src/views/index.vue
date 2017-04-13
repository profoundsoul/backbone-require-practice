<template id="index">
	<div>
		<headerBar :title="title"></headerBar>
		<div>这是我的主页</div>
		<p>{{msg}}</p>
	</div>
</template>
<style >
	
</style>
<script >
	export default {
		data(){
			return {
				msg:'this is my index pages！',
				title:'主页'
			}
		},
		components:{
			headerBar:require('../../components/headerBar.vue')
		}
	}
</script>