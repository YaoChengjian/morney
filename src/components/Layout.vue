<template>
  <div class="layout-wrapper">
    <div class="content" :class="contentClass">
      <slot />
    </div>
    <Nav />
  </div>
</template>

<script>
export default {
  props: ["contentClass"],
  name: "Layout"
};
</script>

<style lang="scss" scoped>
.layout-wrapper {
  display: flex;
  flex-direction: column;
  height: 100vh;
  .content {
    flex-grow: 1;
    overflow: auto;
  }
}
</style>
