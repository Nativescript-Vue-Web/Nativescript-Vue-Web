import Gestures from '../mixins/GestureMixin';

export default {
  props: {
    items: {
      type: Array,
    },
    '+alias': {
      type: String,
      default: 'item',
    },
    '+index': {
      type: String,
    },
  },

  mixins: [Gestures],

  data() {
    return {
      hasTemplates: false,
    };
  },

  created() {
    this.getItemContext = getItemContext.bind(this);
  },

  mounted() {
    this.hasTemplates = !!this.$templates;
    this.$nextTick(() => {
      this.$el.addEventListener('click', this.onItemTap);
    });
  },

  beforeDestroy() {
    if (this.$listeners.itemTap) {
      this.$el.removeEventListener('click', this.onItemTap);
    }
  },

  methods: {
    onItemTap: function(event) {
      this.$emit('itemTap', event);
    },
  },

  render(h) {
    if (!this.hasTemplates) {
      // if we don't yet have the templates
      // we need to render the slot
      // which will then render v-templates
      // and register the this.$templates property
      // this should all happen before mounted()
      // so in mounted() above we change the condition
      // to trigger a re-render with the $templates now
      // known and usable.
      return h('div', this.$slots.default);
    }

    const vnodes = this.items.map((item, index) => {
      const context = this.getItemContext(item, index);
      const name = this.$templates.selectorFn(context);
      // we have changed the patchTemplate function
      // for the web version to return a vnode
      // since in NS, it returns the nativeView
      return this.$templates.patchTemplate(name, context);
    });

    // finally we render a <div class="ListView" />
    // with all the items as children
    // todo: in the future we likely want to make a virtual scroller
    return h(
      'div',
      {
        staticClass: 'ListView',
      },
      [vnodes],
    );
  },
};

function getItemContext(item, index, alias = this.$props['+alias'], index_alias = this.$props['+index']) {
  return {
    [alias]: item,
    [index_alias || '$index']: index,
    $even: index % 2 === 0,
    $odd: index % 2 !== 0,
  };
}
