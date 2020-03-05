<template>
	<div>
		<div class="title">猜你喜欢</div>
		<div class="item border-bottom" v-for="item of list" key="item.id">
			<img class="item-img" :src="item.imgUrl" />
			<div class="item-content">
				<p class="item-title">{{item.title}}</p>
				<p class="item-desc">{{item.desc}}</p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'RecommendList',
	props: {
		list: Array
	},
	method: {

	}
}
</script>

<style lang='scss' scoped>
	@import '~styles/mixins.scss';
	.title {
		background: #eee;
		padding: 0.1rem;
		text-align: left;
	}
	.item {
		display: flex;
		padding: 0.1rem;
		.item-img {
			width: 1rem;
			height: 1rem;
		}
		.item-content {
			flex: 1;
			text-align: left;
			padding: 0 0.1rem 0.1rem 0.1rem;
			min-width: 0;
			.item-title {
				line-height: 0.54rem;
				@include ellipsis;
			}
			.item-desc {
				line-height: .4rem;
        		color: #ccc;
        		@include ellipsis;
			}
		}
	}
</style>