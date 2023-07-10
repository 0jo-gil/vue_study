<template>
  <div>
    <h1>POST</h1>

    <div class="wrap">
      <Thumbnail v-for="(item, index) in posts" :key="index" :post="item" />
    </div>

    <div ref="scrollTrigger"></div>
  </div>
</template>

<script>
import Thumbnail from "@/components/post/Thumbnail.vue";
import postMixin from "@/mixins/post-mixin";
export default {
  components: {
    Thumbnail,
  },
  mixins: [postMixin],
  mounted() {
    this.initializeObserver();
  },
  watch: {
    posts(newVal, oldVal) {
      console.log(newVal);
      newVal.map((item) => console.log(item));
    },
  },
};
</script>

<style scoped>
.wrap {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
}
</style>
