"use strict";

exports.__esModule = true;

var PromiseMixin = {
  data: function data() {
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
    getPromise: function getPromise() {
      var _this = this;

      // eslint-disable-next-line no-undef
      var promise = new Promise(function (resolve, reject) {
        _this._resolveFn = resolve;
        _this._rejectFn = reject;
      });
      return promise;
    },

    /**
    * resolve the promise
    *
    * @param {*} params
    */
    resolve: function resolve() {
      this._resolveFn && this._resolveFn.apply(this, arguments);
      this._chean();
    },
    reject: function reject(err) {
      this._rejectFn && this._rejectFn(err);
      this._chean();
    },
    _chean: function _chean() {
      if (this._resolveFn) {
        this._resolveFn = null;
      }
      if (this._rejectFn) {
        this._rejectFn = null;
      }
    }
  },
  beforeDestory: function beforeDestory() {
    this._chean();
  }
};

exports.default = PromiseMixin;