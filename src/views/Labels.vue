<template>
  <Layout>
    <div class="tags">
      <router-link :to="`/labels/edit/${key}`" class="tag" v-for="(item,key) in tags" :key="item">
        <span>{{item}}</span>
        <Icon name="#right"></Icon>
      </router-link>
    </div>
    <div class="createTag-wrapper">
      <button class="createTag" @click="createTag">新建标签</button>
    </div>
  </Layout>
</template>

<script lang="ts">
import objTag from "@/tagListModel.ts";
import Vue from "vue";
import { Component } from "vue-property-decorator";
@Component
export default class Labels extends Vue {
  tags: string[] = objTag.loading();
  createTag() {
    const name = window.prompt("请输入标签名!!!");
    if (name === "") {
      alert("标签名不能为空!!!");
    } else {
      if (name === null) return;
      const tag = JSON.parse(window.localStorage.getItem("getTag")!) || [
        "衣",
        "食",
        "住",
        "行"
      ];
      window.localStorage.setItem("getTag", JSON.stringify([...tag, name]));
      this.tags = [...tag, name];
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/reset.scss";
.tags {
  background: white;
  font-size: 16px;
  padding-left: 16px;
  display: flex;
  flex-direction: column;

  > .tag {
    min-height: 44px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 2px solid #e6e6e6;
    padding-right: 16px;
    svg {
      color: black;
      font-size: 20px;
    }
  }
}
.createTag {
  background: #767676;
  color: white;
  border: none;
  border-radius: 4px;
  height: 40px;
  padding: 0 16px;
  outline: none;
  &-wrapper {
    text-align: center;
    padding: 40px;
  }
}
</style>