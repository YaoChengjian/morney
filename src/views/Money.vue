<template>
  <Layout contentClass="layout-content">
    <NumberPad @update:value="onUpdateAmount"></NumberPad>

    <Types :value.sync="record.type"></Types>

    <Notes @update:value="onUpdateNotes"></Notes>

    <Tags :data-source.sync="tags" @update:value="onUpdateTags"></Tags>
  </Layout>
</template>

<script lang="ts">
import Tags from "@/components/Money/Tags.vue";
import Notes from "@/components/Money/Notes.vue";
import Types from "@/components/Money/Types.vue";
import NumberPad from "@/components/Money/NumberPad.vue";

import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";

type Record = {
  tags: string[];
  notes: string;
  type: string;
  amount: string;
};

@Component({
  components: { Tags, Notes, Types, NumberPad }
})
export default class Money extends Vue {
  tags: string[] = ["衣", "食", "住", "行", "彩票"];
  record: Record = { tags: [], notes: "", type: "-", amount: "" };

  onUpdateTags(value: string[]) {
    this.record.tags = value;
  }

  onUpdateNotes(value: string) {
    this.record.notes = value;
  }

  onUpdateAmount(value: string) {
    this.record.amount = value;
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
