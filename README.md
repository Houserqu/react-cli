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
.
├── README.md
├── build                             #构建生成目录
│   ├── bundle                        
│   └── index.html
├── package-lock.json
├── package.json
├── src                             #源代码文件
│   ├── action.js                   #action创建函数文件
│   ├── components                  #组件目录 *1
│   │   ├── layout
│   │   └── notify
│   ├── http.js                     #所有fetch请求  *2
│   ├── index.html                  #webpack生成html的模板 *3
│   ├── index.js                    #入口文件
│   ├── reducer.js                  #reducer  *4
│   ├── router.js                   #路由定义
│   ├── routes                      #路由对应的page目录
│   │   ├── App.js                  #入口文件 *5
│   │   ├── index                   #一个页面对应一个文件夹  *6
│   │   │   ├── Index.js
│   │   │   └── index.scss
│   │   └── login
│   │       ├── Login.js
│   │       └── login.scss
│   ├── static                      #静态文件夹
│   │   └── logo.jpg
│   ├── store.js                    #store创建文件  *7
│   └── utils                       #工具集
│       ├── config.js               #项目配置
│       ├── mock.js                 #本地mock数据
│       ├── pace.css                #首屏加载动画css
│       ├── pace.js                 #首屏加载动画js
│       └── theme.scss              #主题sass变量
├── webpack.config.js               #webpack开发配置文件
└── webpack.production.config.js    #webpack构建配置文件
```

### 目录结构说明
1. components 每一个组件对应一个文件夹，包含该组件js以及css，更小的组件也放在该文件夹下
2. 将所有的请求独立出来放在一个文件里，每个fetch请求封装成一个回调函数并export
3. 采用自定义html模板进行打包便于引用cdn等文件，或者其他自定义操作
4. 项目复杂的时候可以创建reducer文件夹，进一步拆分
5. 每个页面都是该组件的字组件，便于引入例如通知等全局组件
6. 每个页面对应一个文件夹，因为一个页面包含的组件较多，利于拆分
7. 独立出来store是便于在非组件的文件中操作reducer的store

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

## 技术分析

### redux
个人还是比较喜欢redux这种严格的 action reducer分离的方式，不容易混乱