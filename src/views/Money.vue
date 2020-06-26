<template>
  <Layout contentClass="layout-content">
    <NumberPad @update:value="onUpdateAmount" @submit="saveRecord"></NumberPad>

    <Types :value.sync="record.type"></Types>

    <Notes @update:value="onUpdateNotes"></Notes>

    <Tags :data-source.sync="tags" @update:value="onUpdateTags"></Tags>
  </Layout>
</template>

<script lang="ts">
import objTag from "@/tagListModel.ts";
import Tags from "@/components/Money/Tags.vue";
import Notes from "@/components/Money/Notes.vue";
import Types from "@/components/Money/Types.vue";
import NumberPad from "@/components/Money/NumberPad.vue";

import Vue from "vue";
import { Component, Prop, Watch } from "vue-property-decorator";

type Record = {
  tags: string[];
  notes: string;
  type: string;
  amount: string;
  createdAt?: Date;
};

@Component({
  components: { Tags, Notes, Types, NumberPad }
})
export default class Money extends Vue {
  tags: string[] = objTag.loading();
  recordList: Record[] = JSON.parse(
    window.localStorage.getItem("recordList") || "[]"
  );
  record: Record = {
    tags: [],
    notes: "",
    type: "-",
    amount: ""
  };

  onUpdateTags(value: string[]) {
    this.record.tags = value;
  }

  onUpdateNotes(value: string) {
    this.record.notes = value;
  }

  onUpdateAmount(value: string) {
    this.record.amount = value;
  }

  saveRecord() {
    const record2 = JSON.parse(JSON.stringify(this.record));
    record2.createdAt =
      new Date().getFullYear() +
      "年" +
      (new Date().getMonth() + 1) +
      "月" +
      new Date().getDate() +
      "日";
    this.recordList.push(record2);
  }
  @Watch("recordList")
  onRecordListChange() {
    window.localStorage.setItem("recordList", JSON.stringify(this.recordList));
  }
}
</script>

<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}
</style>
<style lang="scss" scoped>
</style>
