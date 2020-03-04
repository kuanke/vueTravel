<template>
  <div class="header">
    <div class="header-left">
    	<i class="iconfont">&#xe624;</i>
    </div>
    <div class="header-input">
    	<i class="iconfont">&#xe632;</i>选择城市/景点/游玩主题
    </div>
    <router-link to="/city">
	    <div class="header-right">
	    	{{this.currentCity}}<i class="iconfont">&#xe64a;</i>
	    </div>
	</router-link>
  </div>
</template>

<script>
import {mapState} from 'vuex';

export default {
  name: 'HomeHeader',
  computed: {
	...mapState({
		currentCity: 'city'
	})
  }
}
</script>

<style lang="scss" scoped>
	@import '~styles/variables.scss';
	.header {
		display: flex;
		justify-content: space-between;
		color: white;
		background: $bgColor;
		height: 0.86rem;
		line-height: 0.86rem; //垂直居中
		.header-left {
			width: 0.64rem;	
			margin-left: .12rem;
		}
		.header-input {
			flex: 1; // 填充左右间隙
			height: 0.64rem;
			line-height: .64rem;
			background: white;
			border-radius: 5px;
			margin-top: .12rem;
			margin-left: .12rem;
			color: #ccc;
		}
		.header-right {
			min-width: 1.24rem;
			padding: 0 0.1rem;
			color: #fff
		}
	}
</style>