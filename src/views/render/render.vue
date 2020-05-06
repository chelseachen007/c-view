<!-- demo.vue -->
<template>
  <div>
    <my-component :render="render"></my-component>
  </div>
</template>
<script>
  import myComponent from '@com/render/render.vue';
  
  export default {
    components: { myComponent },
    data () {
      return {
        render: (h) => {
          return h('div', {
            style: {
              color: 'red'
            }
          }, '自定义内容');
        }
      }
    }
  }
</script>