<template>
	<ul class="tabbox">
		<li class="tabitem" :class="{active:curpage==item.code}" v-on:click="switchTab($event, item)" v-for="item in pageList" :data-page="item.code">{{item.name}}</li>
	</ul>
</template>
<script>
	export default {
		props:{
			curpage:{
				type:String,
				require:true,
				default:'tcrh'
			}
		},
		data(){
			return {
				pageList:[
					{name:'提仓入货', code:'tcrh', hash:'/index'},
					{name:'入仓列表', code:'rclb', hash:'/list'},
					{name:'新增异常件', code:'xzycj', hash:'/exception'}
				]
			}
		},
		methods:{
			switchTab:function(e, item){
				// console.log(item);
				// if(this.$router){
				// 	console.log('aaaaa');
				// }
				// console.log(this.$router);
				this.$router.push({path:item.hash});
			}
		}
	}
</script>
<style lang="sass" scoped>
	.tabbox{
		display: inline-block;
		border:1px solid #0094e0;
		min-width: 50%;
		color:#000;
		font-size:1.4rem;
		border-radius:0.5rem;
		background-clip: padding-box;
		margin:0.5rem 0rem;
	}
	.tabbox:after{
		content:'';
		display:table;
		clear:both;
	}

	.tabitem{
		text-align:center;
		padding:0rem 0.8rem;
		display: inline-block;
		border-right: 1px solid #0094e0;
		line-height: 2.8rem;
		height: 2.8rem;
		cursor: pointer;
		box-sizing: border-box;
	}

	.tabitem:last-child{
		border:none;
	}

	.active{
		background:#0094e0;
		color:#fff;
	}

</style>