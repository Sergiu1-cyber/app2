<template lang="pug">
include forma/forma.pug
</template>

<script>
  import axios from 'axios'
  import {mapActions} from 'vuex'
  import { Persoana, Operatia, Categoriile } from '@/components/forma/forma.js'
  
  export default {
    data() {
      return {
        Persoana,
        Operatia,
        Categoriile,
        pers: '',
        oper: '',
        sum: '',
        categ: '',
        mesaj: 'mesaj'
      }
    },
    computed: {
      dates() {
        return "sql=" + JSON.stringify({ persoana:this.pers, operatia:this.oper, suma:this.sum, categoria:this.categ })
      }
    },
    methods: {
      ...mapActions(['citescData']),
      Exp() {
        axios.post('http://localhost:3000/dataBaza/adaog', this.dates )
        .then(() => {
          this.mesaj = 'adaogat' 
          this.citescData()
        })
        .catch(err => {
          this.mesaj = err
        })
      }
    }
  }
</script>

<style >
  .V1 {
    font-size: 200%;
  }
</style>
