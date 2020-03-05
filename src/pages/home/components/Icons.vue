<template>
	<div class="icons">
		<swiper :options="swiperOption">
		    <swiper-slide v-for="(page, index) in pages" :key="index">
				<div class="slide-page">
					<div class="icon"
						 v-for='item of page'
						 :key='item.id'>
						<div class="icon-img">
							<img class='icon-img-content' :src="item.imgUrl">
						</div>
						<div class="icon-name">
							{{item.desc}}
						</div>
					</div>
				</div>
			</swiper-slide>
		</swiper>
	</div>
</template>

<script>
export default {
	name: 'HomeIcons',
	props: {
		list: Array
	},
	data() {
      return {
        swiperOption: {
          autoplay: false
        }
      }
  	},
  	computed: {
  		pages() {
  			const pages = []  // 二维数组
			this.list.forEach((item, index) => {
				const page = Math.floor(index / 8)
				if (!pages[page]) {
				  pages[page] = []
				}
				pages[page].push(item)
			})
			return pages
  		}
  	}
}
</script>
<style lang='scss' scoped>
	// 设置宽高比2：1
	.icons .swiper-container {
		width: 100%;
		height: 0;
		padding-bottom: 50%  
	}
	.icons {
		width: 100%;
		height: 0;
		padding-bottom: 50%;
		.slide-page {
			display: flex;
			flex-wrap: wrap;
			justify-content: flex-start;
			padding: 0.1rem;
			.icon {
				display: inline-block;
				width: 25%;
				height: 0;
				padding-bottom: 25%;
				.icon-img {
					width: 100%;
					.icon-img-content {
						width: 80%;
						height: 80%;
					}
				}
			}
		}
	}
</style>