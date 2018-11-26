const app = {
  state: {
    htmlFontSize: null,
    cardType: 1,
    frontCard: null,
    behindCard: null,
    selectedObj: null,
  },
  mutations: {
    SET_HTMLFONTSIZE: (state, fontSize) => {
      state.htmlFontSize = fontSize
    },
    INIT_FRONTCARD: (state, fCanvas) => {
      state.frontCard = fCanvas
    },
    INIT_BEHINDCARD: (state, fCanvas) => {
      state.behindCard = fCanvas
    },
    SET_SELECTEDOBJ: (state, object) => {
      state.selectedObj = object
    }
  },
  actions: {
    setHtmlFontSize({commit}, fontSize) {
      commit('SET_HTMLFONTSIZE', fontSize)
    },
    initFrontCard({commit}, fCanvas) {
      commit('INIT_FRONTCARD', fCanvas)
    },
    initBehindCard({commit}, fCanvas) {
      commit('INIT_BEHINDCARD', fCanvas)
    },
    setSelectedObj({commit}, object) {
      commit('SET_SELECTEDOBJ', object)
    },
  }
}

export default app
