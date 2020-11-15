<template>
	<view class="content">
		<view class="user-info"><image src="../../static/logo.png"></image></view>
		<view class="user-name">
			<text>{{ customer.name }}</text>
		</view>
		<!-- 个人中心功能 -->
		<!-- 单行内容显示 -->
		<uni-list class="list" v-for="(item, index) of listItem" :key="index">
			<uni-list-item class="list-item" :title="item.title" showExtraIcon :extra-icon="item.icon" showArrow :to="item.url"></uni-list-item>
		</uni-list>
		<button class="button" @click="logout()" v-if="customer.name !== '请登录'">退出</button>
		<navigator url="/pages/login/index"><button class="button" v-if="customer.name === '请登录'">登录</button></navigator>
	</view>
</template>

<script>
export default {
	data() {
		return {
			listItem: [
				{
					title: '邮件',
					icon: { type: 'email' },
					url: '/pages/register/index'
				},
				{
					title: '购物车',
					icon: { type: 'cart' },
					url: '/pages/register/index'
				},
				{
					title: '通知',
					icon: { type: 'sound' },
					url: '/pages/register/index'
				},
				{
					title: '分享',
					icon: { type: 'redo' },
					url: '/pages/register/index'
				},
				{
					title: '扫一扫',
					icon: { type: 'scan' },
					url: '/pages/register/index'
				},
				{
					title: '安全',
					icon: { type: 'locked' },
					url: '/pages/register/index'
				},
				{
					title: '收藏',
					icon: { type: 'star' },
					url: '/pages/register/index'
				}
			],
			customer: {
				name: '请登录',
				passwd: ''
			}
		};
	},
	onLoad() {
		this.getUserKey();
	},
	methods: {
		// 退出按钮
		logout() {
			// 清除缓存
			// uni.clearStorage();
			uni.removeStorage({
				key: 'user_key',
				success: res => {
					console.log('退出成功');
				}
			});
			// 重置name
			this.customer.name = '请登录';
		},
		// 获取缓存
		getUserKey() {
			uni.getStorage({
				key: 'user_key',
				success: res => {
					//console.log(res.data);
					this.customer.name = res.data.name;
					this.customer.passwd = res.data.passwd;
				}
			});

			//获取缓存后需要手动刷新，没有找到自动刷新的好办法
		}
	}
};
</script>

<style lang="scss">
.content {
	.user-info {
		display: flex;
		justify-content: center;
		height: 300rpx;

		image {
			border: 1rpx solid #ffaaff;
			width: 200rpx;
			height: 200rpx;
			border-radius: 100rpx;
		}
	}
	.user-name {
		text-align: center;
		color: #ffaaff;
	}

	.list {
		.list-item {
			height: 120rpx;
		}
		.button {
		}
	}
}
</style>
