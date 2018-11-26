/**
 * Created by Sugar on 2018/11/23.
 */

export function remHandle() {
  // const htmlFontSize = window.window.innerHeight / 1216 * 750 / 10;
  const htmlFontSize = window.innerWidth / 10;
  document.documentElement.style.fontSize = htmlFontSize + 'px';
  return htmlFontSize
}

export function getRemSize(px, htmlFontSize) {
  return (px / 37.5) * htmlFontSize
}

export function getImgSize(img, dprRate) {
  const width = obj.width / 37.5 * DPRRate;
  const height = obj.height / 37.5 * DPRRate;
  return {
    width: width,
    height: height
  }
}
