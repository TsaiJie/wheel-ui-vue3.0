# vite 的使用

## 安装

```bash
yarn global add create-vite-app@1.18.0
```

## 创建项目

```bash
create-vite-app wheel-ui-vue3.0
cva wheel-ui-vue3.0
```

## 运行项目

```bash
  cd wheel-ui-vue3.0
  npm install (or `yarn`)
  npm run dev (or `yarn dev`)
```

## vue2 和 vue3 的区别

1. vue3 template 支持多个根标签，vue2 不支持
2. vue3 是 createApp(组件), vue2 是 new Vue({template, render})

## 安装 vue-router4

```bash
yarn add vue-router@4.0.0-beta.4
```

### 初始化 vue-router

把 main.js 改为了 main.ts
解决引入 vue 的报错

```ts
// shims-vue.d.ts
declare module '*.vue' {
  import { Component } from 'vue'
  const component: Component
  export default component
}
// 或者这一个
declare module '*.vue' {
  import { ComponentOptions } from 'vue'
  const componentOptions: ComponentOptions
  export default componentOptions
}
```

```ts
import { createWebHashHistory, createRouter } from 'vue-router'
```

1. 新建 history 对象

```ts
const history = createWebHashHistory()
```

2. 新建 router 对象

```ts
const router = createRouter({
  history: history,
  routes: [
    { path: '/', component: Tsai },
    { path: '/xxx', component: Tsai2 },
  ],
})
```

3. app.use(router)

```ts
const app = createApp(App)
app.use(router)
app.mount('#app')
```

4. 添加<router-view>
5. 添加<router-link>

```html
<template>
  <div>
    vite 导航栏 |
    <router-link to="/">Tsai</router-link> |
    <router-link to="/xxx">Tsai2</router-link>
  </div>
  <hr />
  <router-view />
</template>
```

