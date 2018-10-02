const Gestures = {
  mounted() {
    this.$el.addEventListener('click', event => (event.detail === 1 ? this.$emit('tap', event) : null));
    this.$el.addEventListener('contextmenu', event => this.$emit('longPress', event));
    this.$el.addEventListener('mousedown', event => this.$emit('touch', event));
    this.$el.addEventListener('dblclick', event => this.$emit('doubleTap', event));
  },
  beforeDestroy() {
    this.$el.removeEventListener('click', this.$listeners.tap);
    this.$el.removeEventListener('contextmenu', this.$listeners.longPress);
    this.$el.removeEventListener('mousedown', this.$listeners.touch);
    this.$el.removeEventListener('dblclick', this.$listeners.doubleTap);
  },
};

export default Gestures;
