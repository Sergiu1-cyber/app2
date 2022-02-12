<template>
  <p>{{ mesaj }}</p>
  <div class="w3-center" v-for="a in allOperatii" :key="a.id">
    <hr />
    <h5>{{ a.id }}</h5>
    <h5>{{ a.persoana }}</h5>
    <p>{{ a.operatia }} : {{ a.suma }}</p>
    <p>{{ a.categoria }}</p>
    <router-link :to="{ name:'Redactez', params:{ id: a.id } }" class="w3-btn w3-purple">Redactez</router-link>
    <button @click="Sterg (a.id)" class="w3-btn w3-red">Sterg</button>
  </div>
  <hr />
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  import axios from 'axios'

  export default {
    data() {
      return {
        mesaj: ''
      }
    },
    computed: {
      ...mapGetters([ 'allOperatii' ])
    },
    methods: {
      ...mapActions(['citescData']),
      Sterg (id) {
        let sql = 'id=' + id
        axios.post('http://localhost:3000/dataBaza/sterg', sql)
        .then(response => {
          this.mesaj = response.data
          this.citescData()
        })
        .catch(err => {
          this.mesaj = err
        })
      }
    },
  }
</script>