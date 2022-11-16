<template>
	<view class="">
		我是首页
		<button @click='goLogin'>去登录</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {
			goLogin() {
				uni.navigateTo({
					url: '/pages/login/login-withoutpwd?type=weixin'
				})
			}
		},
	}
</script>

<style>
</style>
