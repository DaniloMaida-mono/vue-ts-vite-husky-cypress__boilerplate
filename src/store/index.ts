import { createStore } from "vuex";

export type State = { counter: number };

const state: State = { counter: 0 };

export const store = createStore({
  state,
  mutations: {

  },
  actions: {
  },

  getters: {
  },
  modules: {}
});
