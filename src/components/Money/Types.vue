<template>
  <ul class="types">
    <li class="selected">支出</li>
    <li>收入</li>
  </ul>
</template>

<script lang="ts">
export default {
  name: "Types"
};
</script>

<style lang="scss">
.types {
  background: #c4c4c4;
  display: flex;
  li {
    width: 50%;
    padding: 24px 0;
    text-align: center;
    position: relative;
    &.selected::before {
      content: "";
      display: block;
      width: 100%;
      border: 2px solid #000;
      position: absolute;
      left: 0;
      bottom: 0;
    }
  }
}
</style>