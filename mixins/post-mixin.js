export default {
  data() {
    return {
      // 글 목록
      posts: [],
      // 글 상세
      detailPost: {},
      observer: null,
      page: -1,
    };
  },
  mounted() {},

  methods: {
    async getDetailPost(id) {
      const result = await this.$api
        .request("get", `/api/admin/post/${id}`)
        .then((res) => (this.detailPost = res.data))
        .catch((error) => console.log(error));
    },
    async getPosts() {
      const result = await this.$api
        .request("get", `/api/admin/post/list/${this.page}`)
        .then((res) => this.posts.push(...res.data.content))
        .catch((error) => console.log(error));
    },
    initializeObserver() {
      const options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.7,
      };

      this.observer = new IntersectionObserver(this.handleIntersect, options);
      this.observer.observe(this.$refs.scrollTrigger); // 관찰 대상 요소로 등록
    },
    handleIntersect(entries) {
      if (entries[0].isIntersecting) {
        this.page++;
        this.getPosts();
      }
    },
  },
};
