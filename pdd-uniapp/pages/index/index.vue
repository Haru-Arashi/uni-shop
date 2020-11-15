<template>
	<view class="content">
		<!-- 分段器 -->
		<uni-segmented-control :current="current" :values="items" @clickItem="onClickItem" style-type="text" active-color="#d90925"></uni-segmented-control>
		
		<view class="content">
			<view v-if="current === 0"><hot></hot></view>
			<view v-for="(item, index) in goodsDetails" :key="index">
				<view v-if="current === item.current"><other-details :url="item.url" :namne="item.name"></other-details></view>
			</view>
		</view>
	</view>
</template>

<script>
import uniSegmentedControl from '@/components/uni-segmented-control/uni-segmented-control.vue';
import otherDetails from '@/components/home/otherDetails';
import hot from '@/components/home/hot'
export default {
	components: {
		uniSegmentedControl,
		hot,
		otherDetails,
	},
	data() {
		return {
			items: ['热门', '服饰', '鞋包', '母婴', '百货', '食品', '内衣', '男装', '电器'],
			current:0,
			goodsDetails: [
				{
					current: 0,
					url: 'http://127.0.0.1:3000/goods_list'
				},
				{
					current: 1,
					url: 'http://127.0.0.1:3000/goods_list'
				},
				{
					current: 2,
					url: 'http://127.0.0.1:3000/goods_list'
				},
				{
					current: 3,
					url: 'http://127.0.0.1:3000/goods_list'
				},
				{
					current: 4,
					url: 'http://127.0.0.1:3000/goods_list'
				},
				{
					current: 5,
					url: 'http://127.0.0.1:3000/goods_list'
				},
				{
					current: 6,
					url: 'http://127.0.0.1:3000/goods_list'
				},
				{
					current: 7,
					url: 'http://127.0.0.1:3000/goods_list'
				},
				{
					current: 8,
					url: 'http://127.0.0.1:3000/goods_list'
				}
			]
		};
	},
	onLoad() {},
	methods: {
		onClickItem(e) {
			if (this.current !== e.currentIndex) this.current = e.currentIndex;
		}
	}
};
</script>

<style lang="scss"></style>
