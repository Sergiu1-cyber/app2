<template>
    <div>
        <Chart type="pie" :data="chartData2" :options="lightOptions" />
    </div>
</template>

<script>
import Chart from 'primevue/chart';
import { mapGetters } from 'vuex'

export default {
  components: {
    Chart
  },
    data() {
        return {
          rm: 'ramas',
            lightOptions: {
                plugins: {
                    legend: {
                        labels: {
                            color: '#495057'
                        }
                    }
                }
            }
        }
    },
    computed: {
      chartData2() {
        return {
        labels: ['mincare', 'chirie', 'comunale', 'alte', 'ramas'],
        datasets: [{
          data: [this.mincare, this.chirie, this.comunale, this.alte, this.ramas],
          backgroundColor: ["#66BB6A","#FFA726", "#C726FF", "#FF0200", "#42A5F5"],
          hoverBackgroundColor: ["#66BB6A","#FFB74D", "#C726FF", "#FF5354", "#64B5F6"]
          }]
        }
      },
      ...mapGetters([ 'allOperatii' ]),
      /* Calcule Generale */
      cheltuieli() {
        return this.filtru('scad')
      },
      cheltSum() {
        return this.sum(this.cheltuieli)
      },
      cistig() {
        return this.filtru('adaog')
      },
      cistSum() {
        return this.sum(this.cistig)
      },
      ramas() {
        return this.cistSum - this.cheltSum
      },
      /* Calcularea Categorie */
      mincare() {
        return this.categSablon('mincare')
      },
      chirie() {
        return this.categSablon('chirie')
      },
      comunale() {
        return this.categSablon('comunale')
      },
      alte() {
        return this.categSablon('alte')
      }
    },
    methods: {
      filtru(val) {
        return this.allOperatii.filter( a => a.operatia == val )
      },
      categSablon(categ) {
        let val = 0
        let a = this.cheltuieli.filter( a => a.categoria == categ )
        let b = a.map(x => x.suma)
        b.forEach(x => val += x)
        return val
      },
      sum(a) {
        let val = 0
        let b = a.map(x => x.suma)
        b.forEach(x => val += x)
        return val
      }
    }
  }
</script>