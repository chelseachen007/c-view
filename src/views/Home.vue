<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <i-button @click.native="handleClick">点我</i-button>
    <i-button @click.native="handleClick2">点我2</i-button>
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <i-dispatch></i-dispatch>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import iButton from "@com/button/button";
import iDispatch from "@com/dispatch/child";
export default {
  name: "componentB",
  created() {
    this.$on("on-message", this.showMessage);
  },
  components: {
    HelloWorld,
    iButton,
    iDispatch
  },
  methods: {
    handleClick() {
      console.log(11);
      this.$Alert.info({
        content: "我是提示信息 1"
      });
    },
    handleClick2() {
      console.log(11);
      this.$Alert.info({
        content: "我是提示信息 2",
        duration: 3
      });
    },
    showMessage(text) {
      window.alert(text);
    }
  }
};
</script>
