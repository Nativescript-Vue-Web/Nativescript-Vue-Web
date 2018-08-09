/**
 * Debounce function
 * @param callback
 * @param time
 * @returns {Function}
 */
export function debounce(callback, time) {
  let interval;
  return () => {
    clearTimeout(interval);
    interval = setTimeout(() => {
      interval = null;

      // eslint-disable-next-line
      callback(arguments);
    }, time);
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
