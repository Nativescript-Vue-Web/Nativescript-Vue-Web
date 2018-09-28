const ViewDirective = {
  bind(el, binding, vnode) {
    if (vnode.componentInstance.$parent.$refs[binding.arg]) {
      let ref = vnode.componentInstance.$parent.$refs[binding.arg];
      ref.appendChild(el);
    } else {
      console.warn(`Not found "${binding.arg}" $ref in parent element!`, 'v-view directive'); // eslint-disable-line
    }
  },
};

export default ViewDirective;
