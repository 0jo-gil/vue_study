import Vue from "vue";

const COOKIE_NAME = "JSESSIONID";

function hasSession() {
  // return document.cookie.includes(COOKIE_NAME);
}

export const state = () => ({
  session: null,
});

export const mutations = {
  setSession(state, session) {
    state.session = session;
  },
  clearSession(state) {
    state.session = nll;
  },
};

export const actions = {
  async getSession({ commit }) {
    let cookie = null;

    commit("setSession", cookie);

    return cookie;
  },
  logout({ commit }) {
    document.cookie = `${COOKIE_NAME}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    commit("clearSession");
  },
};

export const getters = {
  isLoggedIn(state) {
    return state.session !== null;
  },
};
