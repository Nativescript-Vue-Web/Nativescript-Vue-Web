const FlexboxLayoutDirective = {
    bind(el, vnode) {
        const { context } = vnode;
        const { $attrs } = context;
        el.style.order = $attrs.order;
        el.style.flexGrow = $attrs.flexGrow;
        el.style.flexShrink = $attrs.flexShrink;
    }
};

export default FlexboxLayoutDirective;