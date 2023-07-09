<template>
  <h1>gjgjgjgjgjgjgj</h1>
</template>

<script>
export default {
  name: "IndexPage",
  async created() {
    let cookie = await this.$store.dispatch("store-session/getSession");

    this.$api
      .request("get", `/api/admin/post/1`)
      .then((res) => console.log(res));
  },
};
</script>
