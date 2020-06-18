<template>
  <ul class="types">
    <li :class="{selected:type==='-'}" @click="selectType('-')">支出</li>
    <li :class="{selected:type==='+'}" @click="selectType('+')">收入</li>
  </ul>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
@Component
export default class Types extends Vue {
  type = "-"; // '-' 表示支出 , '+' 表示收入
  selectType(type: string) {
    if (type !== "-" && type !== "+") {
      throw new Error("type is unknown");
    }
    this.type = type;
  }
}
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