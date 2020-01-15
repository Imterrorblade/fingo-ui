## 快速上手
本节将介绍如何在项目中使用fingo。


### 引入fingo
你可以引入整个fingo，或者根据需要仅引入部分组件，我们先介绍如何引入完整的fingo。

#### 完整引入
在main.js中写入以下内容：
```js
import Vue from 'vue'
import FingoUi from 'fingo-ui-lib'
import 'fingo-ui-lib/theme-chalk/index/scss'
import App from './App.vue'

Vue.use(FingoUi)

new Vue({
  el: '#app',
  render: h =>  h(App)
})

```
以上代码便完成了 Fingo 的引入。需要注意的是，样式文件需要单独引入。
#### 按需引入
借助 babel-plugin-component，我们可以只引入需要的组件，以达到减小项目体积的目的。

首先，安装 babel-plugin-component：
```js
npm install babel-plugin-component -D
```
然后，将 .babelrc 修改为：
```
{
  "presets": [["es2015", { "modules": false }]],
  "plugins": [
    [
      "component",
      {
        "libraryName": fingo-ui",
        "styleLibraryName": "theme-chalk"
      }
    ]
  ]
}
```
接下来，如果你只希望引入部分组件，比如 demoCompont，那么需要在 main.js 中写入以下内容：

```javascript
import DemoComponent form 'fingo-ui-lib/lib/components/DemoComponent'

//全局注册
Vue.component('DemoComponent', DemoComponent);

//局部注册
export default {
  data() {
    return {}
  },
  components: {
    DemoComponent
  }
}

```