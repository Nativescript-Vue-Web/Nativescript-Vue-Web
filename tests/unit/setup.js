const { getComputedStyle } = window;
window.getComputedStyle = function getComputedStyleStub(el) {
  return {
    ...getComputedStyle(el),
    transitionDelay: '',
    transitionDuration: '',
    animationDelay: '',
    animationDuration: '',
  };
};
