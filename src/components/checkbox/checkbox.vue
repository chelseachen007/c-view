<!-- checkbox.vue -->
<template>
  <!-- <input>、<slot> 都是包裹在一个 <label> 元素内的，这样做的好处是，当点击 <slot> 里的文字时，
  <input> 选框也会被触发，否则只有点击那个小框才会触发，那样不太容易选中，影响用户体验。-->
  <!--   如果需要美化 则不能直接使用type=checkbox -->
  <label>
    <span>
      <input
        v-if="group"
        type="checkbox"
        :disabled="disabled"
        :value="label"
        v-model="model"
        @change="change"
      />
      <input v-else type="checkbox" :disabled="disabled" :checked="currentValue" @change="change" />
    </span>
    <slot></slot>
  </label>
</template>
<script>
import Emitter from "@mixins/emitter.js";
import { findComponentUpward } from "@utils/assist.js";
export default {
  name: "iCheckbox",
  mixins: [Emitter],
  props: {
    label: {
      type: [String, Number, Boolean]
    },
    disabled: {
      type: Boolean,
      default: false
    },
    value: {
      type: [String, Number, Boolean],
      default: false
    },
    trueValue: {
      type: [String, Number, Boolean],
      default: true
    },
    falseValue: {
      type: [String, Number, Boolean],
      default: false
    }
  },
  data() {
    return {
      currentValue: this.value,
      model: [],
      group: false,
      parent: null
    };
  },
  watch: {
    value(val) {
      if (val === this.trueValue || val === this.falseValue) {
        this.updateModel();
      } else {
        throw "Value should be trueValue or falseValue.";
      }
    }
  },
  methods: {
    updateModel() {
      this.currentValue = this.value === this.trueValue;
    },
    change(event) {
      if (this.disabled) {
        return false;
      }

      const checked = event.target.checked;
      this.currentValue = checked;

      const value = checked ? this.trueValue : this.falseValue;
      this.$emit("input", value);
      //checkout 支持加入from表单进行验证
      if (this.group) {
        this.parent.change(this.model);
      } else {  
        this.$emit("on-change", value);
        this.dispatch("iFormItem", "on-form-change", value);
      }
    }
  },
  mounted() {
    this.parent = findComponentUpward(this, "iCheckboxGroup");
// console.log(this.parent);

    if (this.parent) {
      this.group = true;
    }
    if (this.group) {
      this.parent.updateModel(true);
    } else {
      this.updateModel();
    }
  }
};
</script>