export const state = () => ({
  posts: [],
  detail: {},
});

export const mutations = {
  setPosts(state, posts) {
    state.posts = posts;
  },
  setDetail(state, detail) {
    state.detail = detail;
  },
};

export const actions = {
  async getDetail({ commit }) {
    const { data } = await this.$axios.get("/api/post/1");
    commit("setDetail", data);
  },
};
