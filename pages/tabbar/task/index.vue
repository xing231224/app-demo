<template>
	<view class="">
		<!-- <uni-nav-bar dark :fixed="true" background-color="#007AFF" status-bar title="自定义导航栏" /> -->
		<uni-swipe-action @touchmove.stop>
			<uni-card padding='0' spacing='0' v-for="(item,index) in new Array(20)" :key="index" @touchmove.stop>
				<uni-swipe-action-item :right-options="options"  @click="onClick"
					@change="swipeChange(index)" @touchmove.stop>
					<view class="list-item">SwipeAction 基础使用场景</view>
				</uni-swipe-action-item>
			</uni-card>
		</uni-swipe-action>
		<!-- <button @click='goLogin'>去登录</button> -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				options: [{
					text: '取消',
					style: {
						backgroundColor: '#007aff'
					}
				}, {
					text: '确认',
					style: {
						backgroundColor: '#dd524d'
					}
				}]
			}
		},
		methods: {
			goLogin() {
				uni.navigateTo({
					url: '/pages/login/login-withoutpwd?type=weixin'
				})
			},
			onClick(e) {
				console.log('点击了' + (e.position === 'left' ? '左侧' : '右侧') + e.content.text + '按钮')
			},
			swipeChange(e, index) {
				console.log('当前状态：' + e + '，下标：' + index)
			}
		},
	}
</script>

<style>
	page {
		background-color: #eeeeee;
	}
</style>
<style lang="scss" scoped>
	*{touch-action: none;}
	.list-item {
		height: 60rpx;
		line-height: 60rpx;
	}
</style>
