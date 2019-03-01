const Gestures = {
  mounted() {
    const { $listeners, $el } = this;

    const EVENT_MAP = [
      { webEventName: 'click', nsEventName: 'tap' },
      { webEventName: 'contextmenu', nsEventName: 'longPress' },
      { webEventName: 'mousedown', nsEventName: 'touch', action: 'down' }, 
      { webEventName: 'dblclick', nsEventName: 'doubleTap' },
    ];

    for (let i = 0; i < EVENT_MAP.length; i++) {
      const CURRENT_MAP = EVENT_MAP[i];
      if ($listeners[CURRENT_MAP.nsEventName]) {
        $el.addEventListener(CURRENT_MAP.webEventName, event => {

          event.stopImmediatePropagation();
          event.action = CURRENT_MAP.action;

          this.shouldCancelBubble = false;
          this.$emit(CURRENT_MAP.nsEventName, event, () => {
            this.shouldCancelBubble = true;
          });

          if (!this.shouldCancelBubble && this.$el.parentNode) {
            var evObj = document.createEvent('MouseEvents');
            evObj.initEvent(CURRENT_MAP.webEventName, true, false);
            this.$el.parentNode.dispatchEvent(evObj);
          }
        });
      }
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
