export const state = () => ({
  menu: [
    { id: 1, title: "Home", url: "/" },
    { id: 2, title: "Projects", url: "/projects" },
    { id: 3, title: "Contact", url: "/contact" },
  ],
});

export const getters = {
  menu: (state) => state.menu,
};
