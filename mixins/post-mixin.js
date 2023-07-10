export default {
  data() {
    return {
      detailPost: {},
    };
  },
  methods: {
    async getDetailPost(id) {
      const result = await this.$api
        .request("get", `/api/admin/post/${id}`)
        .then((res) => (this.detailPost = res.data))
        .catch((error) => console.log(error));
    },
  },
};
