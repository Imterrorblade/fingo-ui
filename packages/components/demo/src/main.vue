<template>
  <section>
    <h5>demo 测试组件</h5>
    <Button type="success" @click="clickHandle">点击测试</Button>
  </section>
</template>
<script>
import { Button, Message } from 'element-ui';
export default {
  name: 'FgDemo',
  data() {
    return {
      text: 'this is a demo componet of fingo'
    };
  },
  components: {
    Button
  },
  methods: {
    clickHandle() {
      alert('click success');
      Message.success('click success');
    }
  }
};
</script>