<template>
	<view class="content">
		<image :src="goods_list.imgUrl"></image>
		<view class="title">
			<text>{{ goods_list.name }}</text>
		</view>
		<view class="price">
			<text>￥{{ goods_list.price }}</text>
		</view>
		<view class="tips" v-if="goods_list.tip">
			<text>{{ goods_list.tip }}</text>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			goods_list: {}
		};
	},
	onLoad(options) {
		this.goods_list = options;
		//console.log(options);
	},
	methods: {
		
	}
};
</script>

<style lang="scss">
	.content{
		image{}
		.title,.price,.tips{
			text-align: center;
		}
	}
</style>
