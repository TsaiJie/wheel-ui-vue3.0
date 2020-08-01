// vue文件进行声明
declare module '*.vue' {
  import { Component } from 'vue'
  const component: Component
  export default component
}
