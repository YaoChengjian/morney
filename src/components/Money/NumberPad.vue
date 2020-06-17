<template>
  <div class="numberPad">
    <div class="output">100</div>
    <div class="buttons">
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>删除</button>
      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button>清空</button>
      <button>7</button>
      <button>8</button>
      <button>9</button>
      <button class="ok">OK</button>
      <button class="zero">0</button>
      <button>.</button>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "NumberPad"
};
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