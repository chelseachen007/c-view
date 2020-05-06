<template>
  <div>
    <button @click="handleChange('A')">显示 A 组件</button>
    <button @click="handleChange('B')">显示 B 组件</button>
    <button @click="handleChange('C')">显示 C 组件</button>
    <keep-alive>
      <component :is="component"></component>
    </keep-alive>
  </div>
</template>
<script>
import componentA from "./components/a.vue";
import componentB from "./components/b.vue";
import componentC from "./components/c.vue";

export default {
  data() {
    return {
      component: componentA
    };
  },
  methods: {
    handleChange(component) {
      if (component === "A") {
        this.component = componentA;
      } else if (component === "B") {
        this.component = componentB;
      } else if (component === "C") {
        this.component = componentC;
      }
    }
  }
};
</script>