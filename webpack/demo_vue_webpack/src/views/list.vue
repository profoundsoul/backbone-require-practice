<template>
	<div>
		<div class="header">
			<headerBar :title="tit"></headerBar>
			<tabBar :curpage="pagecode"></tabBar>
		</div>
		<div class="main">
			<div class="search">
				<input type="text" class="needsclick">
				<div class="btn">
					<img src="../assets/img/search.png">
				</div>
			</div>
			<br>
			<div class="list" v-if="list.length>0">
				<p class="total">共<span>{{page}}</span>页<span>{{totalRecord}}</span>条数据</p>
				<br>

				<ul>
					<li v-for="item in list">{{item.code}}----{{item.store}}</li>
				</ul>
			</div>
		</div>
	</div>
</template>
<style lang="sass">
	.search{
		margin-left:8%;
		width:84%;
		height:3rem;
		border:1px solid #0094e0;
		border-radius:1.5rem;
		display:flex;
		flex-direction:row;
		flex-wrap:nowrap;

		input{
			flex:1;
			display:inline-block;
			height:3rem;
			line-height:3rem;
			padding:0.2rem 1.5rem;
			padding-right:0.5rem;
			box-sizing: border-box;
			background:transparent;
			font-size: 1.4rem;
		}

		.btn{
			width: 2.5rem;
		    height: 100%;
		    line-height:100%;
		    cursor:pointer;
		    align-item:center;
		    align-self: center;
		    vertical-algin:middle;
		}

		img{
			width: 1.4rem;
		    height: 2.2rem;
		    margin-right: 0.6rem;
		    margin-top:0.5rem;
		    transform: rotate(-30deg);
		}
	}

	.list{
		.total{
			float:right;
			margin-right: 10%;
			span{
				display:inline-block;
				margin:0rem 0.3rem;
				color:#0099FF;
			}
		}
	}

	.list:after{
		content:'';
		display:table;
		clear:both;
	}
</style>
<script >
	export default {
		data(){                                   
			return {
				tit:'exception',
				pagecode:'rclb',
				list:[{
					code:'789-5698755',
					store:'A13仓',
					tp:'托盘5',
					bg:'包裹1000',
					date:'2016-11-12  14:00',
					subitem:[
						{bno:'C5899466623333',num:60},
						{bno:'C5899466623333',num:60},
						{bno:'C5899466623333',num:60},
						{bno:'C5899466623333',num:60},
						{bno:'C5899466623333',num:60}
					]
				},{
					code:'789-5698755',
					store:'A13仓',
					tp:'托盘5',
					bg:'包裹1000',
					date:'2016-11-12  14:00',
					subitem:[
						{bno:'C5899466623333',num:60},
						{bno:'C5899466623333',num:60},
						{bno:'C5899466623333',num:60},
						{bno:'C5899466623333',num:60},
						{bno:'C5899466623333',num:60}
					]
				}],
				page:5,
				totalRecord:21
			}
		},
		components:{
			headerBar:require('../../components/headerBar.vue'),
			tabBar:require('../../components/tabBar.vue')
		}
	}
</script>