<!-- input.vue -->
<template>
  <input type="text" :value="currentValue" @input="handleInput" @blur="handleBlur" />
</template>
<script>
import Emitter from "../../mixins/emitter.js";
// blur：失去焦点时触发，常见的有输入框失去焦点时触发校验；
// change：实时输入时触发或选择时触发，常见的有输入框实时输入时触发校验、下拉选择器选择项目时触发校验等。
export default {
  name: "iInput",
  mixins: [Emitter],
  props: {
    value: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      currentValue: this.value
    };
  },
  watch: {
    value(val) {
      this.currentValue = val;
    }
  },
  methods: {
    handleInput(event) {
      const value = event.target.value;
      this.currentValue = value;
      this.$emit("input", value);
      this.dispatch("iFormItem", "on-form-change", value);
    },
    handleBlur() {
      this.dispatch("iFormItem", "on-form-blur", this.currentValue);
    }
  }
};
</script>