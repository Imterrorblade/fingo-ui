
const PromiseMixin = {
  data() {
    return {
      _resolveFn: null,
      _rejectFn: null
    };
  },
  methods: {
    /**
     * get promise an return
     *
     * @returns
     */
    getPromise() {
      // eslint-disable-next-line no-undef
      const promise = new Promise((resolve, reject) => {
        this._resolveFn = resolve;
        this._rejectFn = reject;
      });
      return promise;
    },
    /**
 * resolve the promise
 *
 * @param {*} params
 */
    resolve(...params) {
      this._resolveFn && this._resolveFn(...params);
      this._chean();
    },

    reject(err) {
      this._rejectFn && this._rejectFn(err);
      this._chean();
    },

    _chean() {
      if (this._resolveFn) {
        this._resolveFn = null;
      }
      if (this._rejectFn) {
        this._rejectFn = null;
      }
    }
  },
  beforeDestory() {
    this._chean();
  }
};

export default PromiseMixin;
