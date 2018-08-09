/**
 * Debounce function
 * @param func
 * @param wait
 * @param immediate
 * @returns {Function}
 */
export function debounce(func, wait, immediate) {
  let timeout;
  return function debounceReturn() {
    const context = this,
      args = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    }, wait);
    if (immediate && !timeout) func.apply(context, args);
  };
}

/**
 * Convert camelcase to dash
 * @param stringValue
 * @returns {string}
 */

export function camelCaseToDash(stringValue) {
  return stringValue.replace(/([A-Z])/g, g => `-${g[0].toLowerCase()}`);
}

/**
 * Convert the length to pixel unit
 * @param value
 * @returns {string}
 */
export function addPx(value) {
  return value + 'px';
}
