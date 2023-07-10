<template>
  <div class="thumbnail-wrap" @click="$router.push(`/post/${post.id}`)">
    <div>{{ post.title }}</div>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
      default: () => {},
    },
  },

  watch: {
    post(newVal, oldVal) {
      console.log(newVal);
    },
  },

  methods: {},
};
</script>

<style scoped>
.thumbnail-wrap {
  width: calc(100% / 5);
  height: 600px;
  border: 1px solid red;
}
</style>
