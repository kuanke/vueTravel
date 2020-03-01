<template>
  <div class="home">
  	<home-header></home-header>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeHeader from '@/pages/home/components/Header.vue'

export default {
  name: 'Home',
  components: {
    HomeHeader
  }
}
</script>
