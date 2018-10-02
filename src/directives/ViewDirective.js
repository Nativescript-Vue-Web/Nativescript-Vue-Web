const ViewDirective = {
  bind(el, binding, vnode) {
    // If it has a parent element
    let refs;
    if (vnode && vnode.componentInstance && vnode.componentInstance.$parent && vnode.componentInstance.$parent.$refs.constructor === Object) {
      // If parent element not a html element (VueElement etc)
      if (Object.keys(vnode.componentInstance.$parent.$refs).length === 0) {
        if (Object.keys(vnode.componentInstance.$parent.$parent.$refs).length !== 0 && vnode.componentInstance.$parent.$parent.$refs.constructor === Object) {
          refs = vnode.componentInstance.$parent.$parent.$refs;
        }
      } else {
        // If v-view assigned element is a html element
        refs = vnode.componentInstance.$parent.$refs;
      }
    }

    if (refs && refs[binding.arg]) {
      let ref = refs[binding.arg];
      if (ref instanceof Element) {
        ref.appendChild(el);
      } else if (ref.constructor.name === 'VueComponent') {
        ref.$el.appendChild(el);
      } else {
        console.error('Ref element is should be HTML Element or VueElement'); // eslint-disable-line
      }
    } else {
      console.warn(`Not found "${binding.arg}" $ref in parent element!`, 'v-view directive'); // eslint-disable-line
    }
  },
};

export default ViewDirective;
