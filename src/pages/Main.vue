<template>
  <div>
    <h2>Реализация тикеров</h2>
    <ul>
      <li v-if="realizationStatistic" v-for="item in Object.entries(realizationStatistic)" >
        {{ item[0]}}
      </li>
    </ul>
  </div>
</template>

<script>
  import D3PieChart from "@/components/D3PieChart";
  import {mapActions, mapState} from 'vuex'

  export default {
    name: "Main",
    components: {D3PieChart},
    mounted() {
      this.getRealizationStatistic();
    },
    methods: {
      ...mapActions({
        getRealizationStatistic: 'realizationStatistic/getRealizationStatistic'
      }),
    },
    computed: {
      ...mapState({
        realizationStatistic: state => state.realizationStatistic.statistic,
      })
    },
    watch: {
      realizationStatistic: function (val) {
        console.log(val.target,'result ')
        this.testData = val;
      },
    }
  }
</script>

<style scoped>

</style>
