<!-- my-component.vue -->
<template>
  <div>
    <Render :render="render"></Render>
  </div>
</template>
<script>
import Render from "./render.js";

export default {
  components: { Render },
  props: {
    render: Function
  }
};
</script>