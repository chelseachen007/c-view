<!--
 * @Descripttion: 
 * @version: 
 * @Author: Chen
 * @Date: 2020-01-03 09:50:09
 * @LastEditors: Chen
 * @LastEditTime: 2020-05-06 17:01:05
 -->
<!-- src/components/tree/tree.vue -->
<template>
  <div>
    <tree-node
      v-for="(item, index) in cloneData"
      :key="index"
      :data="item"
      :show-checkbox="showCheckbox"
    ></tree-node>
  </div>
</template>
<script>
import TreeNode from "./node.vue";
import { deepCopy } from "../../utils/assist.js";

export default {
  name: "Tree",
  components: { TreeNode },
  props: {
    data: {
      type: Array,
      default() {
        return [];
      }
    },
    showCheckbox: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      cloneData: []
    };
  },
  created() {
    this.rebuildData();
  },
  watch: {
    data() {
      this.rebuildData();
    }
  },
  methods: {
    rebuildData() {
      this.cloneData = deepCopy(this.data);
    },
    emitEvent(eventName, data) {
      this.$emit(eventName, data, this.cloneData);
    }
  }
};

</script>