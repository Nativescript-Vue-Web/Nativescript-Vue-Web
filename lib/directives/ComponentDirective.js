const convertPxStyle = value => typeof value === 'undefined' ? '' : value.toString().includes('%') ? value : value + 'px';

const ComponentDirective = {
    bind(el, binding, vnode) {
        const { context } = vnode;
        const { $attrs } = context;
        el.style.width = convertPxStyle($attrs.width);
        el.style.height = convertPxStyle($attrs.height);
        el.style.backgroundColor = $attrs.backgroundColor;
    }
};

export default ComponentDirective;