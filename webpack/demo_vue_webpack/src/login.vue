<template>
	<div>
		<div class="logo">
			<img src="./assets/img/login.png">
		</div>
		<div class="content">
			<div>
				<input v-model="username" placeholder="请输入账号" type="text" name="uname"><br>
				<input v-model="pwd" placeholder="请输入密码" type="password" name="pwd">
			</div>
			<input type="button" v-on:click="login" class="login-btn" value="登录">
		</div>
		<div class="footer">
			<span>©版权所有</span><br/>
			<span>深圳市思创信息技术有限公司</span>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default {
		data(){
			return {
				username:'',
				pwd:'',
				loginUrl:'http://192.168.2.151:8010/restapi/accounts/api/login/login'
			}
		},
		methods:{
			login(e){
				//用户登录
				console.log(this.username, this.pwd);
				var param = {
				    uname:this.username,
				    pwd:"8e9d60eadc8bb0b39f580cd247f92bde60b060e88dacdc4feec2662857937d505f1c8c325768ee60eb4638c78e11dc682c670a758cfaf71f1175d9b878a48ff9041f36d6592d1d47f253500c5983074d41492d23b35ffcbf865798ead84fa96c9ee164fbaa206592c8efb1a98ce4ae7ae9712ef6b4b15dda22814ddecd1d0241",
				    isagree:1,
				    head:{
				        "cid":"316e53d1-290a-68fb-3dff-351ae5d9f8d7",
				        "syscode":"09",
				        "auth":""
					    },
					 contentType:"json"
					};

				this.$http.post(this.loginUrl, param).then(function(data){
						console.log(data);
						alert('success!!');
				}).catch(function(err){
					console.log('login error!');
					console.log(err);
					alert('login error!');
				})
			}
		}
	}
</script>
<style lang="sass" scoped>
	body{
		background: #0093e0;
	}

	.logo{
		margin-top:4rem;
		display: inline-block;
		width: 100%;
		vertical-align: middle;
	}
	.logo img{
		width:100%;
		display:inline-block;
	}
	.content{
		margin-top:1rem;
		min-height: 100px;
		text-align:center;

		input{
			line-height:3rem;
			height:3rem;
			margin-top:2rem;
			width:80%;
			padding-left:0.5rem;
		}

		.login-btn{
			margin-top: 4rem;
		    display: inline-block;
		    width: 10rem;
		    text-align: center;
		    vertical-align: middle;
		    line-height: 3rem;
		    height: 3rem;
		    font-size: 1.5rem;
		    color: #fff;
		    background: #0096e2;
		    border-radius: 5px;
		    border: 2px solid #fff;
		    text-indent: 2px;
		    letter-spacing: 3px;
		}
	}
	.footer{
		display: inline-block;
		margin-top:3rem;
		color:#fff;
		font-weight: bold;
		text-align: center;
		width: 100%;
	}
</style>

