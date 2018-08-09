const CommonDirective = {
  bind(el, binding, vnode) {
    const { context } = vnode;
    const { $attrs } = context;
    // backgroundColor, width, height, top, left, flexShrink, flexGrow, order.
    if (Object.keys($attrs).length) {
      let cssString = '';
      cssString = $attrs.backgroundColor
        ? cssString
            .concat('background-color:')
            .concat($attrs.backgroundColor)
            .concat(';')
        : cssString;
      cssString = $attrs.width
        ? cssString
            .concat('width:')
            .concat($attrs.width)
            .concat('px;')
        : cssString;
      cssString = $attrs.height
        ? cssString
            .concat('height:')
            .concat($attrs.height)
            .concat('px;')
        : cssString;

      cssString = $attrs.flexShrink
        ? cssString
            .concat('flex-shrink:')
            .concat($attrs.flexShrink)
            .concat(';')
        : cssString;
      cssString = $attrs.flexGrow
        ? cssString
            .concat('flex-grow:')
            .concat($attrs.flexGrow)
            .concat(';')
        : cssString;
      cssString = $attrs.order
        ? cssString
            .concat('order:')
            .concat($attrs.order)
            .concat(';')
        : cssString;
      cssString = $attrs.top
        ? cssString
            .concat('top:')
            .concat($attrs.top)
            .concat('px;')
        : cssString;
      cssString = $attrs.left
        ? cssString
            .concat('left:')
            .concat($attrs.left)
            .concat('px;')
        : cssString;

      el.style.cssText += ';' + cssString;
    }
  },
};

export default CommonDirective;
