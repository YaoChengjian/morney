<template>
  <Layout contentClass="labelAll">
    <div class="navBar">
      <router-link to="/labels">
        <Icon name="#left" class="left"></Icon>
      </router-link>
      <span>编辑标签</span>
    </div>
    <div>
      <label class="tagName">
        <span>标签名</span>
        <input type="text" :placeholder="`${content}`" v-model="value" @change="changeDate" />
      </label>
    </div>
    <div class="deleteTag">
      <router-link to="/labels">
        <button @click="deleteTag">删除标签</button>
      </router-link>
    </div>
  </Layout>
</template>

<script lang="ts">
import objTag from "@/tagListModel.ts";
import Vue from "vue";
import { Component } from "vue-property-decorator";
@Component
export default class EditLabel extends Vue {
  content = "";
  value = "";
  id = "";
  created() {
    const id = this.$route.params.id;
    this.content = objTag.loading()[id];
    this.id = id;
  }
  changeDate() {
    const getTag = JSON.parse(window.localStorage.getItem("getTag")!);
    getTag[this.id] = this.value;
    window.localStorage.setItem("getTag", JSON.stringify([...getTag]));
  }
  deleteTag() {
    const getTag = JSON.parse(window.localStorage.getItem("getTag")!);
    getTag.splice(this.id, 1);
    window.localStorage.setItem("getTag", JSON.stringify([...getTag]));
  }
}
</script>


<style lang="scss">
.labelAll {
  display: flex;
  flex-direction: column;
}
</style>
<style lang="scss" scoped>
.navBar {
  background: white;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-content: center;
  position: relative;
  padding: 20px 0;
  .left {
    position: absolute;
    top: 50%;
    left: 4%;
    transform: translateY(-50%);
  }
  svg {
    width: 25px;
    height: 25px;
  }
}
.tagName {
  display: flex;
  background: white;
  margin-top: 10px;
  padding: 20px 0 20px 4%;
  span {
    padding-right: 10px;
  }
  input {
    border: none;
    outline: none;
    flex-grow: 1;
  }
}
.deleteTag {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  padding-bottom: 30px;
  button {
    border: none;
    outline: none;
    width: 60px;
    height: 40px;
    background: orange;
    color: white;
  }
}
</style>