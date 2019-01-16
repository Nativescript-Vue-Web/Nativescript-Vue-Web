const ViewDirective = {
  inserted(el, binding, vnode) {
    // If it has a parent element
    let refs;
    if (vnode && vnode.componentInstance && vnode.componentInstance.$parent && vnode.componentInstance.$parent.$refs.constructor === Object) {
      refs = vnode.componentInstance.$parent.$parent.$refs;
    }

    if (refs && refs[binding.arg]) {
      let ref = refs[binding.arg];
      ref.$el.appendChild(el);
    } else {
      console.warn(`Not found "${binding.arg}" $ref in parent element!`, 'v-view directive'); // eslint-disable-line
    }
  },
};

export default ViewDirective;
