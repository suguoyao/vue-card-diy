/**
 * Created by Sugar on 2018/11/24.
 */
import store from '@/store'

const card = store.state.app.frontCard

// 插入装饰
export function insertDecorate(object) {
  if (!card) {
    console.log(card);
    return
  }

  const newDecorate = new fabric.Image(object, {
    borderColor: '#ff8d23',
    // padding: 0.23 * DPRRate
  })

  newDecorate.setWidth(50)
  newDecorate.setHeight(50)

  newDecorate.hasControls = false
  card.insertAt(newDecorate, 1).setActiveObject(newDecorate)
  // card.add(newDecorate).setActiveObject(newDecorate)
  card.getObjects()
}
