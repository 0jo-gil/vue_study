<template>
  <div>
    <div>{{ detailPost.title }}</div>
    <div v-html="detailPost.content"></div>
  </div>
</template>

<script>
import postMixin from "@/mixins/post-mixin";
export default {
  mixins: [postMixin],
  data() {
    return {};
  },
  created() {
    let id = this.$route.params.id;
    this.getDetailPost(id);
  },
  watch: {
    detailPost(newVal, oldVal) {
      console.log(newVal);
    },
  },
};
</script>
