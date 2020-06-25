<template>
  <router-view />
</template>

<script>
export default {
  name: "App",
};
</script>

<style lang="scss">
@import "~@/assets/style/reset.scss";
@import "~@/assets/style/helper.scss";
body {
  font-size: 16px;
  font-family: $font-hei;
  color: #333;
  background:#f5f5f5;
}
</style>
