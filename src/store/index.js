import { createStore } from "vuex";

export default createStore({
  state: {
    favorites: [],
  },
  mutations: {
    SET_FAVORITES(state, merchantId) {
      const { favorites } = state;
      let favs = [...favorites];
      const index = favs.indexOf(merchantId);
      if (index > -1) {
        favs.splice(index, 1);
      } else {
        favs.push(merchantId);
      }
      state.favorites = favs;
    },
  },
  actions: {
    // setFavorites(context) {
    //   const currentFavorites = [...state.favorites];
    //   context.commit();
    // },
    // isFavorite(context) {},
  },
  modules: {},
});
