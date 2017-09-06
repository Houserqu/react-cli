var path = require('path');
var HtmlwebpackPlugin = require('html-webpack-plugin');

//定义了一些文件夹的路径
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'src');
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');
var TEM_PATH = path.resolve(APP_PATH, 'index.html');

module.exports = {
  //项目的文件夹 可以直接用文件夹名称 默认会找index.js 也可以确定是哪个文件名字
  entry: {
    app: path.resolve(APP_PATH, 'index.js'),
  },
  //输出的文件名 合并以后的js会命名为bundle.js
  output: {
    path: BUILD_PATH,
    filename: 'bundle?[hash].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader:'babel-loader',
            options:{
              presets:['react','es2015','stage-0'],
              plugins:[

                //配置antd的按需引入
                [
                  'import',{
                    libraryName:'antd',
                    style:'css'
                  }
                ],

                //react热替换
                ['react-transform', {
                  'transforms': [{
                    'transform': 'react-transform-hmr',
                    // if you use React Native, pass "react-native" instead:
                    'imports': ['react'],
                    // this is important for Webpack HMR:
                    'locals': ['module']
                  }]
                  // note: you can put more transforms into array
                  // this is just one of them!
                }]
              ]
            }
          }
        ],
        exclude: /node_modules/,
        
      },
      {
        test: /\.scss$/,
        use: [{
          loader: 'style-loader' // creates style nodes from JS strings
        }, {
          loader: 'css-loader', // translates CSS into CommonJS
          options:{
            modules:true,
            localIdentName:'[name]__[local]-[hash:base64:5]'
          }
        }, {
          loader: 'sass-loader', // compiles Sass to CSS
        }]
      },
      {
        test:/\.css$/,
        use:['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        ]
      }
    ]
  },

  //添加我们的插件 会自动生成一个html文件
  plugins: [
    new HtmlwebpackPlugin({
      title: '控制台-水墨人生',
      template: path.resolve(TEM_PATH),
      filename: 'index.html',
      //chunks这个参数告诉插件要引用entry里面的哪几个入口
      chunks: ['app'],
      //要把script插入到标签里
      inject: 'body'
    }),
    

    
  ],
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devtool: 'eval-source-map',
    
};