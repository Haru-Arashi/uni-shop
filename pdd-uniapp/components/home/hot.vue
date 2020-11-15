<template>
	<view class="content">
		<!-- 轮播图 -->
		<view class="swiper_content">
			<swiper class="swiper" indicator-dots autoplay circular>
				<swiper-item><image src="../../static/image/home/s1.png"></image></swiper-item>
				<swiper-item><image src="../../static/image/home/s2.png"></image></swiper-item>
				<swiper-item><image src="../../static/image/home/s3.png"></image></swiper-item>
				<swiper-item><image src="../../static/image/home/s4.png"></image></swiper-item>
				<swiper-item><image src="../../static/image/home/s5.png"></image></swiper-item>
				<swiper-item><image src="../../static/image/home/s6.png"></image></swiper-item>
				<swiper-item><image src="../../static/image/home/s7.png"></image></swiper-item>
				<swiper-item><image src="../../static/image/home/s8.png"></image></swiper-item>
			</swiper>
		</view>
		<!--中间导航nav  -->
		<view class="nav-content" v-for="(item, index) in navList" :key="item.goods_id">
			<view class="nav-item">
				<image :src="item.iconurl"></image>
				<view class="title">
					<text>{{ item.icontitle }}</text>
				</view>
			</view>
		</view>

		<!-- <view class="line">热门商品</view> -->
		<!-- 下方商品区 -->

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
	data() {
		return {
			navList: [],
			goods_list: {}
		};
	},
	mounted() {
		this.getNavList();
	},
	methods: {
		async getNavList() {
			await uni.request({
				url: 'http://127.0.0.1:3000/homenav',
				success: res => {
					//console.log('请求响应成功！');
					console.log(res.data);
					this.navList = res.data;
					//console.log(this.navList);
				}
			});

			await uni.request({
				url: 'http://127.0.0.1:3000/goods_list',
				success: res => {
					console.log('请求响应成功！');

					this.goods_list = res.data.goods_list;
					console.log(this.goods_list);
				}
			});
		}
	}
};
</script>

<style lang="scss">
.content {
	.swiper_content {
		swiper {
			height: 300rpx;
			image {
				height: 300rpx;
				width: 750rpx;
			}
		}
	}

	.nav-content {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		float: left;
		padding-bottom: 25rpx;
		width: 180rpx;
		height: 200rpx;
		.nav-item {
			height: 200rpx;
			image {
				width: 180rpx;
				height: 180rpx;
			}
			.title {
				font-weight: 100;
				text-align: center;
			}
		}
	}

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
}
</style>
