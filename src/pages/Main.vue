<template>
  <div>
    <h2>Реализация тикеров</h2>
    <div class="clip_loader">
      <clip-loader :loading="isRealizationStatisticLoading" :color="color" :size="size"></clip-loader>
      <D3PieChart v-if="realizationStatistic" :data="realizationStatistic"/>
    </div>
  </div>
</template>

<script>
  import D3PieChart from "@/components/D3PieChart";
  import {mapActions, mapState} from 'vuex'
  import ClipLoader from 'vue-spinner/src/ClipLoader.vue';

  export default {
    name: "Main",
    components: {
      D3PieChart,
      ClipLoader
    },
    mounted() {
      this.getRealizationStatistic();
    },
    data(){
      return {
        size: "100px",
        loading: true,
        color: "#5dc596"
      }
    },
    methods: {
      ...mapActions({
        getRealizationStatistic: 'realizationStatistic/getRealizationStatistic'
      }),
    },
    computed: {
      ...mapState({
        realizationStatistic: state => state.realizationStatistic.ticketStatistic,
        isRealizationStatisticLoading: state => state.realizationStatistic.isRealizationStatisticLoading,
      })
    },
    watch: {
      realizationStatistic: function (val) {
        this.testData = val;
      },
    }
  }
</script>

<style scoped>
  .clip_loader {
    display: flex;
    justify-content: flex-start;
    padding-top:44px;
    padding-left:44px;
  }
</style>
