<template>
	<view class="content">
		<!-- 显示圆形头像 -->
		<!--
		   此处报错：
		  [system]TypeError: Cannot read property 'firstChildAppend' of undefined 
		  是uni-list-chat组件里面的firstChildAppend未定义，原因不明，也不敢改，反正不影响运行，很奇妙
		  -->
		<view>
			<uni-list-chat
				:avatar-circle="true"
				title="uni-app"
				avatar="https://img-cdn-qiniu.dcloud.net.cn/new-page/uni.png"
				to="/pages/register/index"
				note="您收到一条新的消息"
				time="2020-02-02 20:20"
			></uni-list-chat>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {};
	},
	onLoad() {},
	methods: {}
};
</script>

<style></style>
