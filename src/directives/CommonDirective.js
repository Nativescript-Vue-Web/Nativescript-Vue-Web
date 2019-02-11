const applyCss = function(el, binding, vnode) {
  const { context } = vnode;
  const { $attrs } = context;
  if (Object.keys($attrs).length) {
    let cssString = '';

    cssString += $attrs.backgroundColor ? `background-color : ${$attrs.backgroundColor};` : '';
    cssString += typeof $attrs.width !== 'undefined' ? `width: ${$attrs.width}px;` : '';
    cssString += typeof $attrs.height !== 'undefined' ? `height: ${$attrs.height}px;` : '';
    cssString += typeof $attrs.flexShrink !== 'undefined' ? `flex-shrink: ${$attrs.flexShrink};` : '';
    cssString += typeof $attrs.flexGrow !== 'undefined' ? `flex-grow: ${$attrs.flexGrow};` : '';
    cssString += typeof $attrs.order !== 'undefined' ? `order: ${$attrs.order};` : '';
    cssString += typeof $attrs.top !== 'undefined' ? `top: ${$attrs.top}px;` : '';
    cssString += typeof $attrs.left !== 'undefined' ? `left: ${$attrs.left}px;` : '';
    cssString += $attrs.alignSelf ? `align-self: ${$attrs.alignSelf};` : '';
    cssString += $attrs.flexWrapBefore ? `flex-wrap: wrap;` : '';
    cssString += typeof $attrs.row !== 'undefined' ? `grid-row:${parseInt($attrs.row) + 1};` : '';
    cssString += typeof $attrs.col !== 'undefined' ? `grid-column:${parseInt($attrs.col) + 1};` : '';
    cssString += typeof $attrs.rowSpan !== 'undefined' ? `grid-row-end: span ${$attrs.rowSpan};` : '';
    cssString += typeof $attrs.colSpan !== 'undefined' ? `grid-column-end: span ${$attrs.colSpan};` : '';
    cssString += $attrs.fontStyle ? `font-style: ${$attrs.fontStyle};` : '';
    cssString += $attrs.fontWeight ? `font-weight: ${$attrs.fontWeight};` : '';
    cssString += $attrs.color ? `color: ${$attrs.color};` : '';

    el.style.cssText += ';' + cssString;
  }
};

const CommonDirective = { bind: applyCss, update: applyCss };

export default CommonDirective;
