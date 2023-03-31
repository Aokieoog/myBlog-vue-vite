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