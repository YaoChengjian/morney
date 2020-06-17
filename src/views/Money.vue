<template>
  <Layout contentClass="layout-content">
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

    <ul class="types">
      <li class="selected">支出</li>
      <li>收入</li>
    </ul>

    <div>
      <label class="notes">
        <span class="name">备注</span>
        <input type="text" placeholder="在这里添加备注" />
      </label>
    </div>

    <div class="tags">
      <div class="new">
        <button>新增标签</button>
      </div>
      <ul class="current">
        <li>衣</li>
        <li>食</li>
        <li>住</li>
        <li>行</li>
      </ul>
    </div>
  </Layout>
</template>

<script>
export default {
  name: "Money"
};
</script>

<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}
</style>
<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
.tags {
  display: flex;
  flex-direction: column-reverse;
  align-items: flex-start;
  flex-grow: 1;
  padding: 16px;
  > .current {
    display: flex;
    flex-wrap: wrap;
    > li {
      background: #d9d9d9;
      $h: 24px;
      height: $h;
      border-radius: $h/2;
      padding: 0 16px;
      margin-right: 12px;
      font-size: 14px;
      line-height: $h;
      margin-top: 10px;
    }
  }
  .new {
    padding-top: 16px;
    button {
      background: transparent;
      border: none;
      color: #999;
      padding: 4px;
      border-bottom: 2px solid #333;
    }
  }
}

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
