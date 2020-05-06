<template>
  <button @click="handleClick">触发事件</button>
</template>
<script>
import Emitter from "../../mixins/emitter.js";

export default {
  name: "componentA",
  mixins: [Emitter],
  methods: {
    handleClick() {
      this.dispatch("componentB", "on-message", "Hello Vue.js");
    }
  }
};
</script>