<template>
  <div class="numberPad">
    <div class="output">{{output}}</div>
    <div class="buttons">
      <button @click="inputContent">1</button>
      <button @click="inputContent">2</button>
      <button @click="inputContent">3</button>
      <button @click="remove">删除</button>
      <button @click="inputContent">4</button>
      <button @click="inputContent">5</button>
      <button @click="inputContent">6</button>
      <button @click="clear">清空</button>
      <button @click="inputContent">7</button>
      <button @click="inputContent">8</button>
      <button @click="inputContent">9</button>
      <button class="ok" @click="ok">OK</button>
      <button class="zero" @click="inputContent">0</button>
      <button @click="inputContent">.</button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
@Component
export default class NumberPad extends Vue {
  output = "0";
  inputContent(event: MouseEvent) {
    const button = event.target as HTMLButtonElement;
    const input = button.textContent!;
    if (this.output.length === 16) return;
    if (this.output === "0") {
      if ("0123456789".indexOf(input) >= 0) {
        this.output = input;
      } else {
        this.output += input;
      }
      return;
    }
    if (this.output.indexOf(".") >= 0 && input === ".") return;

    this.output += input;
  }

  // 删除
  remove() {
    const length = this.output.length - 1;
    if (length === 0) {
      this.output = "0";
      return;
    }
    this.output = this.output.substr(0, length);
  }

  // 清空
  clear() {
    this.output = "0";
  }

  // ok
  ok() {
    this.$emit("update:value", this.output);
    this.$emit("submit", this.output);
    this.output = "0";
  }
}
</script>

<style lang="scss">
@import "~@/assets/style/helper.scss";

.numberPad {
  .output {
    font-size: 36px;
    font-family: Consolas, monospace;
    padding: 16px;
    text-align: right;
    box-shadow: inset 0 3px 3px -3px rgba(0, 0, 0, 0.5),
      inset 0 -3px 3px -3px rgba(0, 0, 0, 0.5);
  }
  .buttons {
    @extend %clearFix;
    > button {
      outline: none;
      border: none;
      width: 25%;
      height: 64px;
      float: left;
      background: transparent;
      $bg: #f2f2f2;
      &:nth-child(1) {
        background: darken($bg, 4% * 2);
      }
      &:nth-child(2),
      &:nth-child(5) {
        background: darken($bg, 4% * 3);
      }
      &:nth-child(3),
      &:nth-child(6),
      &:nth-child(9) {
        background: darken($bg, 4% * 4);
      }
      &:nth-child(4),
      &:nth-child(7),
      &:nth-child(10) {
        background: darken($bg, 4% * 5);
      }
      &:nth-child(8),
      &:nth-child(11) {
        background: darken($bg, 4% * 6);
      }

      &:nth-child(14) {
        background: darken($bg, 4% * 8);
      }
      &:nth-child(12) {
        background: darken($bg, 4% * 9);
      }
      &:nth-child(13) {
        background: darken($bg, 4% * 7);
      }
    }
    .ok {
      height: 128px;
      float: right;
    }
    .zero {
      width: 50%;
    }
  }
}
</style>