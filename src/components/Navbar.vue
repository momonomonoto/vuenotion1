<template>
  <div class="navbar">
    <div @click="$router.push('/')" style="cursor:pointer">Adrestia club</div>
    <div class="navbar__btns">
      Хороших Вам профитов!
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
.navbar {
  height: 50px;
  background: linear-gradient(135deg,#b1e541 4.17%,#0fb661);
  background-image: linear-gradient(135deg,rgb(177, 229, 65) 4.17%, rgb(15, 182, 97));
  color: #fff;
  box-shadow: 2px 2px 4px gray;
  display: flex;
  align-items: center;
  padding: 0 15px;
}
.navbar__btns {
  margin-left: auto;
}
</style>
