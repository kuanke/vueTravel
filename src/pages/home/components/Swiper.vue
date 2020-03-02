<template>
	<div class="wrapper">
	  <swiper :options="swiperOption">
	    <swiper-slide v-for="(slide, index) in swiperSlides" :key="index">
	    	<img :src="slide" class="swiper-img">
	    </swiper-slide>
	    <div class="swiper-pagination" slot="pagination">asdas</div>
	  </swiper>
	</div>
</template>

<script>
export default {
	name: 'HomeSwiper',
    data() {
      return {
        swiperOption: {
          pagination: '.swiper-pagination',
          loop: true
        },
        swiperSlides: ["//img1.qunarzz.com/sight/p0/1411/b1/6d37bd78a55604b1eb1fecb41bfb4370.water.jpg_600x330_2f99f727.jpg",
        	"//img1.qunarzz.com/sight/p0/1906/19/1991248c561d2663a3.water.jpg_600x330_bbfcc891.jpg"]
      }
    },
}

</script>

<style lang='scss' scoped>
		.wrapper {
			width: 100%;
			overflow: hidden;
			height: 0;
			padding-bottom: 40%;
			background: #eee;
			.swiper-img {
				width: 100%;
			}
		}
	
</style>