<template>
	<view class="content">
		<view class="goods-list" v-for="(item, index) in goodsList" :key="item.goods_id">
			<view class="goode-item">
				<!-- 暂时不写详情页面，修改后台的传参后再处理 -->
				<navigator :url="`/pages/goodsDetails/index?id=${item.goods_id}&imgUrl=${item.image_url}&name=${item.goods_name}&price=${item.price}&tip=${item.sales_tip}`"><image :src="item.image_url"></image></navigator>
				<view class="item-info">
					<text class="goods-name">{{ item.goods_name }}</text>
					<text class="goods-tip">{{ item.sales_tip }}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			goodsList: {}
		};
	},
	mounted() {
		this.getList();
	},
	methods: {
		async getList() {
			await uni.request({
				url: 'http://127.0.0.1:3000/recommend',
				success: res => {
					this.goodsList = [...res.data];
					console.log(this.goodsList);
				}
			});
		}
	}
};
</script>

<style lang="scss"></style>
