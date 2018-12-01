const app = {
  state: {
    htmlFontSize: null,
    cardType: 1,
    frontCard: null,
    behindCard: null,
    selectedObj: null,
    canvasState: null,
    undoList: [],
    redoList: [],
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
    },
    SET_CANVASSTATE: (state, canvasState) => {
      state.canvasState = canvasState
    },
    ADD_UNDO: (state, canvasState) => {
      state.undoList.push(canvasState)
    },
    POP_UNDO: (state) => {
      state.undoList.pop()
    },
    ADD_REDO: (state, canvasState) => {
      state.redoList.push(canvasState)
    },
    POP_REDO: (state) => {
      state.redoList.pop()
    },
    SET_REDOLIST: (state, list) => {
      state.redoList = list
    },
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
    setCanvasState({commit}, canvasState) {
      commit('SET_CANVASSTATE', canvasState)
    },
    addUndo({commit}, canvasState) {
      commit('ADD_UNDO', canvasState)
    },
    popUndo({commit}) {
      commit('POP_UNDO')
    },
    addRedo({commit}, canvasState) {
      commit('ADD_REDO', canvasState)
    },
    popRedo({commit}) {
      commit('POP_REDO')
    },
    setRedo({commit}, list) {
      commit('SET_REDOLIST', list)
    },
    saveState({commit, state}) {
      // 清空恢复栈redoList
      commit('SET_REDOLIST', [])

      if (state.canvasState) {
        commit('ADD_UNDO', state.canvasState)
      }

      commit('SET_CANVASSTATE', state.frontCard.toJSON())
      // commit('ADD_UNDO', state.canvasState)
      console.log(state.canvasState);
    }
  }
}

export default app
