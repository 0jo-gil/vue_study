// import postApiService from "@/services/postApiService";

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
  async getDetail({ commit }, id) {
    // console.log(this.$axios);
    // const data = await postApiService.getDetail(id);
    // console.log(data);
    // commit("setDetail", data);
  },
};
