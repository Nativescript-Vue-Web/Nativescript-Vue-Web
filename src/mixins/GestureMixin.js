const Gestures = {
  mounted() {
    const { $listeners, $el } = this;
    if ($listeners.tap) {
      $el.addEventListener('click', event => (event.detail === 1 ? this.$emit('tap', event) : null));
    }
    if ($listeners.longPress) {
      $el.addEventListener('contextmenu', event => this.$emit('longPress', event));
    }
    if ($listeners.touch) {
      $el.addEventListener('mousedown', event => this.$emit('touch', event));
    }
    if ($listeners.doubleTap) {
      $el.addEventListener('dblclick', event => this.$emit('doubleTap', event));
    }
  },
  beforeDestroy() {
    const { $listeners, $el } = this;
    if ($listeners.tap) {
      $el.removeEventListener('click', $listeners.tap);
    }
    if ($listeners.longPress) {
      $el.removeEventListener('contextmenu', $listeners.longPress);
    }
    if ($listeners.touch) {
      $el.removeEventListener('mouseover', $listeners.touch);
    }
    if ($listeners.doubleTap) {
      $el.removeEventListener('dblclick', $listeners.doubleTap);
    }
  },
};

export default Gestures;
