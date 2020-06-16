<template>
  <nav>
    <router-link to="/money" class="item" active-class="active">
      <Icon name="#money" />记账
    </router-link>
    <router-link to="/labels" class="item" active-class="active">
      <Icon name="#label" />标签
    </router-link>
    <router-link to="/statistics" class="item" active-class="active">
      <Icon name="#statistics" />统计
    </router-link>
  </nav>
</template>

<script>
export default {
  name: "Nav",
};
</script>

<style lang="scss" scoped>
nav {
  display: flex;
  justify-content: center;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
  .item {
    display: flex;
    flex-direction: column;
    align-items: center;
    align-self: center;
    width: 33.33333%;
    padding: 8px 0;
    .icon {
      width: 22px;
      height: 22px;
    }
    &.active {
      color: red;
    }
  }
}
</style>
