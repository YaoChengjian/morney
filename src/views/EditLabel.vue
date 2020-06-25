<template>
  <Layout>
    编辑标签
    {{content}}
  </Layout>
</template>

<script lang="ts">
import objTag from "@/tagListModel.ts";
import Vue from "vue";
import { Component } from "vue-property-decorator";
@Component
export default class EditLabel extends Vue {
  content = "";
  created() {
    const id = this.$route.params.id;
    this.content = objTag.loading()[id];
    console.log(objTag.loading()[id]);
  }
}
</script>

<style lang="scss" scoped>
</style>