<template>
	<view>
		<view class="goods-list" v-for="item in goods_list" :key="item.goods_id">
			<view class="goods-item">
				<!-- 暂时不写详情页面，修改后台的传参后再处理 -->
				<navigator :url="`/pages/goodsDetails/index?id=${item.goods_id}&name=${item.goods_name}&imgUrl=${item.image_url}&price=${item.group.price}`"><image :src="item.thumb_url"></image></navigator>
				<view class="goods-price">
					<text>￥{{ item.group.price }}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			url:{type:String}
			},
		data() {
			return {
				goods_list: {}
			}
		},
		mounted(){
			// console.log(this.url)
			this.getGoodsList();
		},
		methods: {
			async getGoodsList() {
				await uni.request({
					url: 'http://127.0.0.1:3000/goods_list',
					success: res => {
						console.log('请求响应成功！');
			
						this.goods_list = res.data.goods_list;
						// console.log(this.goods_list);
					}
				});
			}
		}
	}
</script>

<style lang="scss">
.goods-list {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		float: left;
		.goods-item {
			width: 370rpx;
			image {
				width: 370rpx;
			}
			.goods-name {
				text-align: center;
			}
		}
	}
</style>
