<template>
  <div>
    <div>{{authorByCountData}}</div>
    <div>{{columnNames}}</div>
  </div>
</template>

<script>
export default {
  name: "AuthorStatistic",
  props:['authorByCountData'],
  computed: {
    columnNames() {
      return Object.values(this.authorByCountData||{}).map(stateDealData=>Object.getOwnPropertyNames(stateDealData));
    },

  }
}
</script>

<style scoped>

</style>
