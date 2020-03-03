<template>
  <div class="home">
  	<home-header></home-header>
  	<home-swiper :list="swiperList"></home-swiper>
  	<home-icons :list="iconList"></home-icons>
  </div>
</template>

<script>
import axios from 'axios'
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
  },
  data () {
    return {
      lastCity: '',
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: []
    }
  },
  methods: {
    getHomeInfo () {
      axios.get('/api/index.json?city=' + this.city)
        .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      console.log(res)
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.swiperList = data.swiperList
        this.iconList = data.iconList
        this.recommendList = data.recommendList
        this.weekendList = data.weekendList
      }
    }
  },
  mounted() {
    console.log('=====');
    this.getHomeInfo();
  }
}
</script>
