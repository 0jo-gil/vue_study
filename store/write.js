export const state = () => ({
  title: "",
  content: "",
});

export const mutations = {
  setTitle(state, title) {
    state.title = title;
  },
  setContent(state, content) {
    console.log(content);
    state.content = content;
  },
};
