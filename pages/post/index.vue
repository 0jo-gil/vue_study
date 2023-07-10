<template>
  <div>
    <h1>POST</h1>

    <div v-for="(item, index) in posts" :key="index">
      <div>{{ item.title }}</div>
    </div>

    <div ref="scrollTrigger"></div>
  </div>
</template>

<script>
import postMixin from "@/mixins/post-mixin";
export default {
  mixins: [postMixin],
  mounted() {},
  watch: {
    posts(newVal, oldVal) {
      console.log(newVal);
      newVal.map((item) => console.log(item));
    },
  },
};
</script>
