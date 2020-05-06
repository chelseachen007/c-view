<template>
  <div>
    <i-tree :data="data"></i-tree>
  </div>
</template>

<script>
import iTree from "@com/tree/tree.vue";
export default {
  components: { iTree },
  data() {
    return {
      data: [
        {
          title: "parent 1",
          expand: true,
          children: [
            {
              title: "parent 1-1",
              expand: true,
              children: [
                {
                  title: "leaf 1-1-1"
                },
                {
                  title: "leaf 1-1-2"
                }
              ]
            },
            {
              title: "parent 1-2",
              children: [
                {
                  title: "leaf 1-2-1"
                },
                {
                  title: "leaf 1-2-1"
                }
              ]
            }
          ]
        }
      ]
    };
  },
  created() {},
  mounted() {},
  methods: {}
};
</script>

<style scoped lang="scss">
</style>
