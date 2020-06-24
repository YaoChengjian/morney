<template>
  <div>
    <label class="notes">
      <span class="name">备注</span>
      <input type="text" placeholder="在这里添加备注" v-model="value" />
    </label>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Watch } from "vue-property-decorator";
@Component
export default class Notes extends Vue {
  value = "";
  @Watch("value")
  onValueChanged(newValue: string, oldValue: string) {
    this.$emit("update:value", newValue);
  }
}
</script>

<style lang="scss">
.notes {
  font-size: 14px;
  display: flex;
  background: #f5f5f5;
  padding-left: 16px;
  align-items: center;
  .name {
    padding-right: 16px;
  }
  input {
    padding: 32px 0;
    flex-grow: 1;
    background: inherit;
    border: none;
    outline: none;
  }
}
</style>
