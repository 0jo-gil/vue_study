<template>
  <div>
    <div>{{ post.title }}</div>
    <div v-html="post.content"></div>
  </div>
</template>

<script>
import post from "@/mixins/post";
export default {
  mixins: [post],
  data() {
    return {
      post: {},
    };
  },
  created() {
    try {
      let id = this.$route.params.id;
      const res = this.$axios
        .request("get", `/api/admin/post/${id}`)
        .then((res) => {
          this.post = res.data;
        });
    } catch (error) {
      console.log(error);
    }
  },
};
</script>
