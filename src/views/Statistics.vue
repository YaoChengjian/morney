<template>
  <Layout>
    <Types classPrefix="xxx" :value.sync="yyy" />
    <div>
      <ul class="bookKeep">
        <li v-for="item in yyy === '-' ? dataOutput:dataIncome" :key="item.value">
          <div class="timeMoney">
            <span>{{item.createdAt}}</span>
            <span>{{item.amount + '元'}}</span>
          </div>
          <div class="detailed">
            <span>{{item.tags.toString() === '' ? "用户没有勾选":item.tags.toString()}}</span>
            <span>{{item.notes}}</span>
          </div>
        </li>
      </ul>
    </div>
  </Layout>
</template>

<script lang="ts">
import Types from "@/components/Money/Types.vue";
import Vue from "vue";
import { Component } from "vue-property-decorator";
@Component({
  components: { Types }
})
export default class Statistics extends Vue {
  yyy = "-";
  dataOutput: string[] = [];
  dataIncome: string[] = [];
  created() {
    console.log(this.yyy);
    const dataSoure = JSON.parse(window.localStorage.getItem("recordList")!);
    this.dataOutput = dataSoure.filter(function(item: any) {
      return item.type === "-";
    });
    this.dataIncome = dataSoure.filter(function(item: any) {
      return item.type === "+";
    });
  }
}
</script>

<style lang="scss" scoped>
::v-deep .xxx-item {
  background: white;
  &.selected {
    background: #c4c4c4;
    &::before {
      display: none;
    }
  }
}

.bookKeep {
  padding: 5px 20px;
  margin-top: 10px;
  background: white;
  li {
    margin-bottom: 5px;
  }
  .timeMoney {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #ccc;
    padding: 5px 0;
  }
  .detailed {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 5px;
  }
}
</style>
