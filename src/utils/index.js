/**
 * Created by Sugar on 2018/11/23.
 */

/**
 * 函数节流 返回函数连续调用时，fn 执行频率限定为每多少时间执行一次
 * @param func 需要调用的函数
 * @param delay 延迟时间，单位毫秒
 * @returns {Function} 实际调用函数
 */
export function throttle(func, delay) {
  let last = 0
  return function () {
    let curr = +new Date()
    if (curr - last > delay) {
      func.apply(this, arguments)
      last = curr
    }
  }
}

/**
 * 函数去抖 返回函数连续调用时，空闲时间必须大于或等于wait，func才会执行
 * @param func 需要调用的函数
 * @param wait 空闲时间，单位毫秒
 * @param immediate 是否立即执行
 * @returns {Function}  实际调用函数
 */
export function debounce(func, wait, immediate) {
  let timeout, args, context, timestamp, result

  const later = function () {
    // 据上一次触发时间间隔
    const last = +new Date() - timestamp

    // 上次被包装函数被调用时间间隔last小于设定时间间隔wait
    if (last < wait && last > 0) {
      timeout = setTimeout(later, wait - last)
    } else {
      timeout = null
      // 如果设定为immediate===true，因为开始边界已经调用过了此处无需调用
      if (!immediate) {
        result = func.apply(context, args)
        if (!timeout) context = args = null
      }
    }
  }

  return function (...args) {
    context = this
    timestamp = +new Date()
    const callNow = immediate && !timeout
    // 如果延时不存在，重新设定延时
    if (!timeout) timeout = setTimeout(later, wait)
    if (callNow) {
      result = func.apply(context, args)
      context = args = null
    }

    return result
  }
}

/**
 * 深度复制对象
 * @param source
 * @returns {*}
 */
export function deepClone(source) {
  if (!source && typeof source !== 'object') {
    throw new Error('error arguments', 'shallowClone')
  }
  const targetObj = source.constructor === Array ? [] : {}
  Object.keys(source).forEach((keys) => {
    if (source[keys] && typeof source[keys] === 'object') {
      targetObj[keys] = source[keys].constructor === Array ? [] : {}
      targetObj[keys] = deepClone(source[keys])
    } else {
      targetObj[keys] = source[keys]
    }
  })
  return targetObj
}

/**
 * 数组去重
 * @param arr
 * @returns {any[]}
 */
export function uniqueArr(arr) {
  return Array.from(new Set(arr))
}
