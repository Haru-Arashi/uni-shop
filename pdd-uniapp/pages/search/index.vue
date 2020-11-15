<template>
	<view>
		<view class="example-body">
			<uni-search-bar @confirm="search" @input="input" @cancel="cancel" />
			<!-- <view class="search-result">
				<text class="search-result-text">当前输入为：{{ searchVal }}</text>
			</view> -->
		</view>
		<!-- 分类搜索 -->
		<view class="search-list" v-for="(item, index) of searchList" :key="index">
			<uni-card class="list-card" :title="item.name">
				<view class="list-item" v-for="(listItem, index) in item.items" :key="index">
					<image :src="listItem.icon"></image>
					<view class="title">
						<text >{{ listItem.title }}</text>
					</view>
					
				</view>
			</uni-card>
		</view>
	</view>
</template>

<script>
import uniSearchBar from '@/components/uni-search-bar/uni-search-bar.vue';
import uniCard from '@/components/uni-card/uni-card.vue';
export default {
	components: {
		uniSearchBar,
		uniCard
	},
	data() {
		return {
			searchVal: '',
			searchList: []
		};
	},
	onLoad() {
		this.getSearchList();
	},
	methods: {
		async getSearchList() {
			await uni.request({
				url: 'http://127.0.0.1:3000/search',
				success: res => {
					this.searchList = res.data.data;
					console.log(this.searchList);
				}
			});
		},
		search(res) {
			uni.showToast({
				title: '搜索：' + res.value,
				icon: 'none'
			});
		},
		input(res) {
			this.searchVal = res.value;
		},
		cancel(res) {
			uni.showToast({
				title: '点击取消，输入值为：' + res.value,
				icon: 'none'
			});
		}
	},
	onBackPress() {
		// #ifdef APP-PLUS
		plus.key.hideSoftKeybord();
		// #endif
	}
};
</script>

<style lang="scss">
.search-list {
	
	.list-card {
		display: flex;
		flex-wrap: wrap;
		
		
		.list-item {
			float: left;
			image {
				width: 200rpx;
				height: 200rpx;
			}
			.title {
				text-align: center;
			}
		}
	}
}
</style>
