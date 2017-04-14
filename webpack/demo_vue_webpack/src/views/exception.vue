<template>
	<div>
		<div class="header">
			<headerBar :title="tit"></headerBar>
			<tabBar :curpage="pagecode"></tabBar>
		</div>
		<div class="main">
			<p>这是新增异常件</p>
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				tit:'exception',
				pagecode:'xzycj'
			}
		},
		components:{
			headerBar:require('../../components/headerBar.vue'),
			tabBar:require('../../components/tabBar.vue')
		}
	}
</script>

<style lang="sass" scoped>
	
</style>