# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

### Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

### 命名规则

- 组件命名 小驼峰 父文件夹 小驼峰
- 页面命名 小驼峰 父文件夹 大驼峰

### 引入OpenAI😔

- npm install openai

```js 
import { Configuration, OpenAIApi } from "openai";
const configuration = new Configuration({
    organization: "org-2etYOOQNqUb7PrA1psY72HP8",
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
const response = await openai.listEngines();
```

### .env文件

```js
.env                # 所有情况下都会加载
.env.local          # 所有情况下都会加载，但会被 git 忽略
.env.[mode]         # 只在指定模式下加载
.env.[mode].local   # 只在指定模式下加载，但会被 git 忽略
```

默认情况下，开发服务器 (`dev` 命令) 运行在 `development` (开发) 模式，而 `build` 命令则运行在 `production` (生产) 模式。

### BUG
>1.问题:`ECharts`关于`DOM`加载先后顺序问题
```js
Charts] Can't get DOM width or height. Please check dom.clientWidth and dom.clientHeight. They should not be 0.For example, you may need to call this in the callback of window.onload. o
```
解决方案:`v-show`换成`v-if`

>2.问题:方法使用在根目录下
```js
ntime-core.esm-bundler.js:40 [Vue warn]: Extraneous non-props attributes (class) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. at <Login class="globalRouting" onVnodeUnmounted=fn<onVnodeUnmounted> ref=Ref< Proxy(Object) {__v_skip: true} > > at <KeepAlive> at <RouterView key=0 class="globalRouting" > at <App>
```
解决方案:在`<template>`标签内增加一个`<div>`