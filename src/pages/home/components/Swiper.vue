<template>
	<div class="wrapper">
	  <swiper :options="swiperOption">
	    <swiper-slide v-for="slide in list" :key="slide.id">
	    	<img :src="slide.imgUrl" class="swiper-img">
	    </swiper-slide>
	    <div class="swiper-pagination" slot="pagination"></div>
	  </swiper>
	</div>
</template>

<script>
export default {
	name: 'HomeSwiper',
	props: {
		list: Array
	},
    data() {
      return {
        swiperOption: {
          pagination: '.swiper-pagination',
          loop: true
        }
      }
    },
}

</script>

<style lang='scss' scoped>
	.wrapper .swiper-pagination-bullet-active {  //todo 不生效
    	background: #fff;
	}
	.wrapper {
		width: 100%;
		overflow: hidden;
		height: 0;
		padding-bottom: 31.25%;
		background: #eee;
		.swiper-img {
			width: 100%;
		}
	}
	
</style>