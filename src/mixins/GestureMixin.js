const Gestures = {
  mounted() {
    const { $listeners, $el } = this;
    if ($listeners.tap) {
      $el.addEventListener('click', event => {
        event.stopImmediatePropagation();
        event.detail === 1 ? this.$emit('tap', event) : null;
      });
    }
    if ($listeners.longPress) {
      $el.addEventListener('contextmenu', event => {
        event.stopImmediatePropagation();
        this.$emit('longPress', event);
      });
    }
    if ($listeners.touch) {
      $el.addEventListener('mousedown', event => {
        event.stopImmediatePropagation();
        this.$emit('touch', event);
      });
    }
    if ($listeners.doubleTap) {
      $el.addEventListener('dblclick', event => {
        event.stopImmediatePropagation();
        this.$emit('doubleTap', event);
      });
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
      $el.removeEventListener('mousedown', $listeners.touch);
    }
    if ($listeners.doubleTap) {
      $el.removeEventListener('dblclick', $listeners.doubleTap);
    }
  },
};

export default Gestures;
