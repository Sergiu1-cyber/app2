<template>
  <Redactez :id="id" />
</template>

<script>
  import Redactez from '@/components/Redactez.vue'
  
  export default {
    props: ['id'],
    components: {
      Redactez
    }
  }
</script>
