const applyCss = function(el, binding, vnode) {
  const { context } = vnode;
  const { $attrs } = context;
  if (Object.keys($attrs).length) {
    let cssString = '';

    cssString += $attrs.backgroundColor ? `background-color : ${$attrs.backgroundColor};` : '';
    cssString += $attrs.width ? `width: ${$attrs.width}px;` : '';
    cssString += $attrs.height ? `height: ${$attrs.height}px;` : '';
    cssString += $attrs.flexShrink ? `flex-shrink: ${$attrs.flexShrink};` : '';
    cssString += $attrs.flexGrow ? `flex-grow: ${$attrs.flexGrow};` : '';
    cssString += $attrs.order ? `order: ${$attrs.order};` : '';
    cssString += $attrs.top ? `top: ${$attrs.top}px;` : '';
    cssString += $attrs.left ? `left: ${$attrs.left}px;` : '';
    cssString += $attrs.alignSelf ? `align-self: ${$attrs.alignSelf};` : '';
    cssString += $attrs.flexWrapBefore ? `flex-wrap: wrap;` : '';
    cssString += $attrs.row ? `grid-row:${parseInt($attrs.row) + 1};` : '';
    cssString += $attrs.col ? `grid-column:${parseInt($attrs.col) + 1};` : '';
    cssString += $attrs.rowSpan ? `grid-row-end: span ${$attrs.rowSpan};` : '';
    cssString += $attrs.colSpan ? `grid-column-end: span ${$attrs.colSpan};` : '';
    cssString += $attrs.fontStyle ? `font-style: ${$attrs.fontStyle};` : '';
    cssString += $attrs.fontWeight ? `font-weight: ${$attrs.fontWeight};` : '';
    cssString += $attrs.color ? `color: ${$attrs.color};` : '';

    el.style.cssText += ';' + cssString;
  }
};

const CommonDirective = { bind: applyCss, update: applyCss };

export default CommonDirective;
