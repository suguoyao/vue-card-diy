/**
 * Created by Sugar on 2018/6/11.
 */

const getters = {
  htmlFontSize: state => state.app.htmlFontSize,
  cardType: state => state.app.cardType,
  card: state => state.app.cardType === 1 ? state.app.frontCard : state.app.behindCard,
  frontCard: state => state.app.frontCard,
  selectedObj: state => state.app.selectedObj,
  canvasState: state => state.app.canvasState,
  undoList: state => state.app.undoList,
  redoList: state => state.app.redoList,
}

export default getters
