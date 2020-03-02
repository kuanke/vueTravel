<template>
  <div class="home">
  	<home-header></home-header>
  	<home-swiper></home-swiper>
  	<home-icons></home-icons>
  	sasdasdas
  </div>
</template>

<script>
// @ is an alias to /src
import HomeHeader from '@/pages/home/components/Header.vue'
import HomeSwiper from '@/pages/home/components/Swiper.vue'
import HomeIcons from '@/pages/home/components/Icons.vue'

export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
	HomeIcons
  }
}
</script>
