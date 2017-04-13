<template>
	<header class="box">
		<img class="home" src="../src/assets/img/home.png" @click="goHome">
		<div class="content">
			<img src="../src/assets/img/titlelogo.png" >
		</div>
		
		<img class="loginout" @click="loginOut" src="../src/assets/img/loginout.png" >
	</header>
</template>
<script >
	export default {
		props:['title'],
		data(){
			return {
				title:'',
			}
		},
		methods:{
			back(){

			},
			goHome(){
				alert('Index!');
			},
			loginOut(){
				alert('LoginOut!');
			}
		}
	}
</script>
<style lang="sass" scoped>
	.box{
		display: flex;
		position:fixed;
		flex-wrap:nowrap;
		flex-direction:row;

		width: 100%;
		height: 4rem;
		background:#0093e0;
	}

	.home{
		display:inline-block;
		width: 35px;
		height: 35px;
		align-self: center;
		    margin-left: 0.5rem;
		    cursor:pointer;
	}

	.content{
		flex:1;
		align-self:center;
		text-align: center;

		img{
			width:auto;
			height: 28px;
			display:inline-block;
		}
	}

	.loginout{
		display:inline-block;
		width: 35px;
		height: 35px;
		align-self: center;
		margin-right: 0.5rem;
		cursor:pointer;
	}
</style>