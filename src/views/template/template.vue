<template>
  <div id="main" class="container" style="color: red">
    <p v-if="show">内容 1</p>
    <p v-else>内容 2</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: false
    };
  }
};

// export default {
//   data() {
//     return {
//       show: false
//     };
//   },
//   render: h => {
//     let childNode;
//     if (this.show) {
//       childNode = h("p", "内容 1");
//     } else {
//       childNode = h("p", "内容 2");
//     }

//     return h(
//       "div",
//       {
//         attrs: {
//           id: "main"
//         },
//         class: {
//           container: true
//         },
//         style: {
//           color: "red"
//         }
//       },
//       [childNode]
//     );
//   }
// };
</script>