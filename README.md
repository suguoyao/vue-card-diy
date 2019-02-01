# vue-card-diy

## 简介

<a href="http://card.suguoyao.com" target="_blank">vue-card-diy</a>是一个基于Vue的可DIY卡片和生成卡片的个人项目。常见的使用场景有会员卡、名片等卡的定制。

<p align="center">
  <img width="300" src="https://sugars.oss-cn-shenzhen.aliyuncs.com/diy/diy-demo2.png" style="float:left;display:inline-block;">
</p>

<p align="center">
  <img width="300" src="https://sugars.oss-cn-shenzhen.aliyuncs.com/diy/diy-demo3.png">
</p>

## 在线Demo
<a href="http://card.suguoyao.com" target="_blank">Demo</a>

## 技术栈
[vue](https://cn.vuejs.org/index.html)、[vuex](https://vuex.vuejs.org/zh-cn/)、[vue-router](https://router.vuejs.org/zh-cn/) 、
[muse-ui](https://muse-ui.org/#/zh-CN) 和 [fabric.js](http://fabricjs.com/)


## 功能
```
- 卡片整体
  - 自定义卡片背景
  - 撤销/恢复
  - 生成预览图
  - 清空所有图层
  - 正反面切换（待开发）
  - 横竖样式切换（待开发）
- 装饰图层
  - 左右翻转/上下翻转
  - 旋转
  - 双指缩放
  - 移动图层层级
  - 删除图层
- 文字
  - 左右翻转/上下翻转
  - 旋转
  - 双指缩放
  - 移动图层层级
  - 删除图层
  - 修改内容
  - 修改颜色（待开发）
  - 加粗/斜体 （待开发）
- 图层
  - 依序显示当前卡片图层
  - 点击定位到图层

...

```
目前个人利用业余时间开发，欢迎 issue 提出想法和建议！~ 😜

## 开发

``` bash
# 克隆项目
git clone https://github.com/suguoyao/vue-card-diy.git

# 安装依赖
npm install

# 启动服务（浏览器访问 http://localhost:8080）
npm run dev / npm start

# 构建
npm run build

```


## License
[MIT](https://github.com/suguoyao/vue-card-diy/blob/master/LICENSE)
