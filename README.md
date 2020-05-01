# wd-mobile
轻松构建属于自己内部团队的组件库，配套文档和案例生成器。

## 目录说明
```
|———— components 存放所有组件文件夹
|     |———— button 组件文件夹
|     |     |———— style 样式文件夹
|     |     |     └———— index.scss 样式文件
|     |     |———— Button.tsx 组件本体
|     |     |———— Example.tsx 组件案例（主要文档案例都在该文件完成）
|     |     └———— Readme.md 文档文件（一般情况无需处理）
|     └———— index.tsx 入口文件，导出目标组件
|———— dist 打包文件夹（入口文件的全依赖）
|———— docs 文档及一些项目相关的文档
|     |———— assets 存放docs下markdown用到的资源文件夹
|     |———— GetStarted.md 文档中的使用指南
|     |———— Introduction.md 文档中的简介
|     |———— Mobile.md 文档中的扫码页面（目前没放上去，需要完成 `example/mobile.tsx`的路由）
|     └———— Todo.md 一些未来组件的事项计划
|———— example 开发文件夹
|     |———— index.html 
|     |———— index.scss
|     |———— index.tsx
|     └———— mobile.tsx 文档中的扫码页面
|———— lib 打包文件夹（非入口文件，所有单组件的打包文件夹）
|———— node_modules （项目的node依赖）
|———— site 打包文件夹（文档案例）
|———— styleguide 文档资源相关文件夹
|     |———— components 可以配置，来取代文档系统的某部分ui
|     |———— images 文档中使用的图片资源
|     |———— style 文档中的样式
|     └———— yml.json 根文件 `index.yml` 生产，用于文档左侧菜单展示
|———— template 
|     |———— Page 生产组件的模版
|     └———— style 打包时，注入的打包依赖（不需要关系及操作它）
|———— .gitignore 
|———— declarations.d.ts 
|———— digofile.js digo脚本
|———— index.js 入口文件
|———— index.yml 组件文档左侧菜单配置
|———— package.json
|———— README.md 项目文档说明
|———— server.js 开发服务
|———— styleguide.config.js 文档配置
|———— tsconfig.json typescript配置
└———— webpack.config.js webpack配置
```      

## 命令说明
|`npm run <script>`|说明|
|------------------|---|
|dev|开发服务，匹配 `example/index.tsx` 进行开发&测试组件|
|start|文档服务|
|build:es|打包模块组件|
|build:lib|打包整个组件|
|build:demo|构建example的案例内容至demo文件夹|
|build:mobile|构建手机演示案例内容至site文件夹|
|build:doc|构建最终的文档至site文件夹|
|deploy|最终生产构建，打包es与build|
|bundle|依赖分析工具|

## 开发指南
1. 生成一个组件模版：`xxx create <ComponentName>`
2. 如通用组件，建议将组件添加至 `components/index.tsx` 中
3. 通过`example/index.jsx`修改开发的组件引用，完成组件案例编写
4. `npm run dev` 开启开发服务，进行开发测试。
5. `npm start` 开启文档服务，编写扩展 `components/<ComponentName>/Readme.md` 文档说明。（可选）
6. 所有测试通过后，验收发布。

### 创建组件
创建新页面:
```bash
# 首字母大写命名的组件名
# 如 `xxx create Button` & `xxx create ListItem`
xxx create <ComponentName>
```

> 会在 `components/` 下新增一个组件模版，对于通用组件，可将其放入 `components/index.tsx` 中。将其打入整包内，而业务组件首选按需引用。

## 文档开发指南

### 如何加入文档展示
对于需要在文档展示的组件，请在 `index.yml` 中添加对应组件。

### md引用资源
所有`Readme.md`文件内的代码段如需引用外部资源，可通过`/xx`来访问`styleguide`文件夹下的文件

### 编写文档
- [如何编写文档](https://react-styleguidist.js.org/docs/documenting.html#public-methods)

## Webpack配置
```javascript
const getWebpackConfig = require('rcm-tools/lib/getWebpackConfig') 
// 获取基础 webpack 配置函数
getWebpackConfig({
  libraries: [], // 多包名处理
  babelConfig: {}, // babel插件配置
  modules: false, // 其它babel模块
  styleGlobal: [], // 全局注入sass
  postcssConfig: {}, // postcss配置
  webpackConfig: {}, // 原始webpack配置
})
```

- libraries
> `libraries` 主要为了配置多包名，默认读取根路径 `package.json` 的 `name` 字段

- babelConfig
> 配置 `babel` 中 `@babel/preset-env` 的 `modules` 字段

- modules
> 配置 `babel` 中 `@babel/preset-env` 的 `modules` 字段

- styleGlobal
> 全局注入 `scss`，在 `components` 下的所有 `scss` 文件，统一注入目标 `scss` 文件，常用于注入变量及`mixin`

- postcssConfig
> 配置及信则 `postcss` 的插件

- webpackConfig
> 对现有的 `webpack` 基础上追加原始 `webpack` 配置

## 注意事项

### 样式篇
- 编写样式时，切忌修改全局性的 `dom` 样式，避免他人引用组件而影响他自身的样式。
- 尽量都通过`class`赋值的形式修改样式。
- 所有组件的`class`都以`x-<class>`命名
- 所有基础样式的值，请通过 scss 变量赋值，添加可配置性。（文件所在 `components/style/common/variables.scss`）

### Form 组件
`Form` 包裹下的组件 只要满足一下几种，就会被列入表单类组件
- `props` 下含有 `__type__`（代表某类表单组件）属性
- 存在有效的 `name` 字段
- 未设置 `disabled` 属性

### Form 类组件扩展
- 实现 `value` 的 `get` 及 `set` 方法 （必须实现，依托于该方法取值）
- 赋值默认的 `__type__`（组件类型名） 属性 （必须实现，依托于该属性标识它为Form类组件）
- 实现 `elem` 的 `get` 方法，用于获取组件元素。`Form` 组件可通过该字段滚至将未填写的组件位置。
- 组件内部实现一个 `reset` 方法，调用 `Form` 的 `reset` 方法可以达到统一清空值的效果
- 组件内部实现一个 `reportValidity` 方法，在 `Form` 提交时会触发该组件内部的 `reportValidity` 方法，来实现你想实现的提示逻辑
- 组件内部实现一个 `checkValidity` 方法，在 `Form` 提交时会触发该组件内部的 `reportValidity` 方法来获取 `checkValidity`函数的返回状态，做一些提示相关的事项。
> 返回的结果 { valid: boolean, message: string | null | undefined }，`message` 字段会由 `reportValidity` 方法以 `Toast`的形势抛出。
- 实现一个 `props.noValidate` 来绕过 `checkValidity` 的校验逻辑，返回 `{ valid: true, message: null }`
