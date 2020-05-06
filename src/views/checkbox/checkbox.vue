<template>
  <div>
    <div>
      <i-checkbox v-model="single" @on-change="inforlog">单独选项</i-checkbox>
    </div>
    <i-checkbox-group v-model="multiple" @on-change="inforlog">
      <i-checkbox label="option1">选项 1</i-checkbox>
      <i-checkbox label="option2">选项 2</i-checkbox>
      <i-checkbox label="option3">选项 3</i-checkbox>
      <i-checkbox label="option4">选项 4</i-checkbox>
    </i-checkbox-group>
  </div>
</template>
<script>
import iCheckbox from "@com/checkbox/checkbox.vue";
import iCheckboxGroup from "@com/checkGroup/checkbox-group.vue";
export default {
  components: { iCheckbox, iCheckboxGroup },
  data() {
    return {
      multiple: ["option1", "option3"],
      single: false
    };
  },
  watch: {
    // single(val) {
    //   console.log(val);
    // },
    // multiple(val) {
    //   console.log(val);
    // }
  },
  methods: {
    inforlog(val) {
      console.log(val);
    }
  }
};
</script>