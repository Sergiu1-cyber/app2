<template>
    <Navigation />
    <router-view />
</template>

<script>
  import Navigation from '@/components/Navigation.vue'
  import { mapActions } from 'vuex'

  export default {
    components: {
      Navigation
    },
    data() {
      return {
        close: false,
        a: "a"
      }
    },
    methods: {
      ...mapActions([ 'citescData' ]),
    },
    mounted(){
      this.citescData()
    }
  }
</script>

<style>
#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
