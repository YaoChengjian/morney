<template>
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
</template>

<script>
export default {
  name: "Tags"
};
</script>

<style lang="scss">
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
</style>