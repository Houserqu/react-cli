# react-cli

<p align="center">
  <img src='https://img.shields.io/badge/react-~15.6.1-green.svg'/>
</p>
<p align="center">
[![TeamCity (simple build status)](https://img.shields.io/badge/react-~15.6.1-green.svg)](https://github.com/facebook/react)
</p>
react应用的起步工程和探讨

## 特点

采用时下流行的技术栈，视图：react，状态管理：redux，路由：react-router 作为基础，配合webpack等开发工具而搭建的项目架构，适用于中小型项目，也可以在此基础上进行调整适合更多类型的项目。

同时还会提供react开发相关的资料、疑问、解决方案等，希望对开发者有所帮助，也对自己的技术有所提升。欢迎大家提供建议

## 技术栈

- [react](https://facebook.github.io/react/)
- [redux](https://github.com/reactjs/redux)
- [react-router](https://github.com/ReactTraining/react-router)
- [mock](https://github.com/nuysoft/Mock)
- [pace](https://github.com/HubSpot/pace)
- [whatwg-fetch](https://github.com/github/fetch)

## 目录结构

|-build
|-src
  |-components
  |-routes
  |-utils
  |-static
  |-actions.js
  |-http.js
  |-index.html
  |-index.js
  |-reducer.js
  |-router.js
  |-store.js
.gitignore
package.json
webpack.config.js
webpack.production.config.js

## 更新日志


## 技术分析

### redux
个人还是比较喜欢redux这种严格的 action reducer分离的方式，不容易混乱