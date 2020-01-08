<template>
  <section class="password">
    <el-dialog
      :visible.sync="showPwd"
      title="密码验证"
      center
      @close="close"
    >
      <el-form>
        <el-form-item label="密码">
          <el-input
            v-model="password"
            type="password"
            placeholder="请输入钱包密码"
          ></el-input>
        </el-form-item>
      </el-form>
      <span
        slot="footer"
        class="dialog-footer"
      >
        <el-button @click="close">取 消</el-button>
        <el-button
          :loading="loading"
          type="success"
          @click="conformPwd"
        >确 定</el-button>
      </span>
    </el-dialog>
  </section>
</template>

<script >
import PromiseMixin from 'main/mixins/promiseMixin';

export default {
  mixins: [PromiseMixin],
  name: 'EnterPassword',
  data() {
    return {
      showPwd: false,
      loading: false,
      password: ''
    };
  },
  methods: {
    conformPwd() {
      this.loading = true;
      if (this.checkPwd()) {
        this.resolve(this.password);
        this.close();
      } else {
        this.reject(new Error('密码输入错误'));
        this.close();
      }
    },

    close() {
      this.password = '';
      this.showPwd = false;
      this.loading = false;
      this._chean();
    },

    checkPwd() {
      return true;
    },

    $wait() {
      console.log('enterPassword');
      this.showPwd = true;
      return this.getPromise();
    },

    init() {

    }
  }
};
</script>
<style lang="scss" scoped>
.password {
  /deep/.el-dialog{
    width: 500px;
  }
}
</style>
