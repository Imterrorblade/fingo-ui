## EnterPassword
弹框输入密码组件

### 基础用法
基础的弹框用法。


::: demo

```html

<div>
  <h5>{{password}}</h5>
  <el-button type="primary" @click="clickHandle">点击输入密码</el-button>
</div>
  <enter-password ref="pwd"></enter-password>
<script>
  export default {
    data(){
      return {
        password: ''
      }
    },
    methods: {
      clickHandle(){
        this.$refs.pwd.$wait().then(pwd=> this.password = pwd)

      }
    }
  }
</script>
```
:::

