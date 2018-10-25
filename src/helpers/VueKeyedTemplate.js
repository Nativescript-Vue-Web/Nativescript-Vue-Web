export default class VueKeyedTemplate /* implements KeyedTemplate */ {
  constructor(key, scopedFn) {
    this._key = key;
    this._scopedFn = scopedFn;
  }

  get key() {
    return this._key;
  }

  createView() {
    // we are returning null because we don't have the data here
    // the view will be created in the `patchTemplate` method above.
    // see https://github.com/nativescript-vue/nativescript-vue/issues/229#issuecomment-390330474
    return null;
  }
}
