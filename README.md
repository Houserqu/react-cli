<h1 align='center'>react-cli</h1>
<p align='center'>react应用的起步工程和总结</p>

<p align='center'>
  <a href="https://github.com/facebook/react">
    <img src="https://camo.githubusercontent.com/edda976676ecfa3993474b1c1d7bcd120cfd2011/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f72656163742d25374531352e362e312d677265656e2e737667" alt="TeamCity (simple build status)" data-canonical-src="https://img.shields.io/badge/react-%7E15.6.1-green.svg" style="max-width:100%;">
  </a>
  <a href="https://github.com/reactjs/redux">
    <img src="https://camo.githubusercontent.com/9450857857183c28a628e3986dd3753a0a76d5b5/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f72656475782d253545332e372e322d677265656e2e737667" alt="Wercker" data-canonical-src="https://img.shields.io/badge/redux-%5E3.7.2-green.svg" style="max-width:100%;">
  </a>
  <a href="https://github.com/ReactTraining/react-router">
    <img src="https://camo.githubusercontent.com/b7a8d8cd8681575533ed05805f61c8f55a21f0f3/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f72656163742d2d726f757465722d253545332e302e332d677265656e2e737667" alt="Travis" data-canonical-src="https://img.shields.io/badge/react--router-%5E3.0.3-green.svg" style="max-width:100%;">
  </a>
  <a href="https://opensource.org/licenses/MIT">
    <img src="https://camo.githubusercontent.com/3f7996bf7bd441deb7199c498aaa835164dee8da/68747470733a2f2f696d672e736869656c64732e696f2f6475622f6c2f766962652d642e737667" alt="DUB" data-canonical-src="https://img.shields.io/dub/l/vibe-d.svg" style="max-width:100%;"></a>
  <a href="https://github.com/Houserqu/react-cli/pulls">
    <img src="https://camo.githubusercontent.com/ef7f9a5121a87ec0b41fbf403d164240737178e8/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f70756c6c25323072657175657374732d77656c636f6d652d626c75652e737667" alt="TeamCity (simple build status)" data-canonical-src="https://img.shields.io/badge/pull%20requests-welcome-blue.svg" style="max-width:100%;">
  </a>
</p>

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

## 项目构建

### 目录结构

```
|-build/
|-src/
  |-components/
  |-routes/
  |-utils/
  |-static/
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
```

目录结构说明
- component

### 开发说明

克隆项目:

```bash
git clone https://github.com/Houserqu/react-cli.git
```

进入项目目录安装依赖:

```bash
npm i 
```

开发:

```bash 
npm run dev
```

构建:

```bash 
npm run build
````

## 更新日志


## 技术分析

### redux
个人还是比较喜欢redux这种严格的 action reducer分离的方式，不容易混乱