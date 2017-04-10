<template>
	<div>
		<div class="logo"></div>
		<div class="content">
			内容
		</div>
	</div>
</template>
<script type="text/javascript">
	export default {
		data(){
			return {
				msg:'login'
			}
		}
	}
</script>
<style lang="sass">
	body{
		background: #0093e0;
	}

	.logo{
		margin-top:5rem;
		background:url(./assets/img/login.png) no-repeat;
		height: 206px;
	}
	.content{
		margin-top:2rem;
	}
</style>

