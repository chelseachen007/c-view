<template>
  <div>组件 A</div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  created() {},
  mounted() {
    console.log("组件创建了");
  },
  beforeDestroy() {
    console.log("组件销毁了");
  },
  methods: {}
};
</script>

<style scoped lang="scss">
</style>
