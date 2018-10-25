import TemplateBag from '../helpers/TemplateBag';
import Gestures from '../mixins/GestureMixin';

let tid = 0;
export default {
  props: {
    name: {
      type: String,
    },
    if: {
      type: String,
    },
  },

  mixins: [Gestures],

  mounted() {
    if (!this.$scopedSlots.default) {
      return;
    }

    this.$templates = this.$el.parentNode.$templates = this.$parent.$templates = this.$parent.$templates || new TemplateBag();
    this.$templates.registerTemplate(this.$props.name || (this.$props.if ? `v-template-${tid++}` : 'default'), this.$props.if, this.$scopedSlots.default);
  },

  render() {},
};
