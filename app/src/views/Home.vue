<template>
  <div class="home w3-container w3-center">
   <h1>Home</h1>
   <ChartVue />
  </div>
</template>

<script>
// @ is an alias to /src
import ChartVue from '@/components/ChartVue.vue'

export default {
  name: 'Home',
  components: {
    ChartVue
  }
}
</script>
