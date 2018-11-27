const NvwRouter = {
  install: (Vue, pluginOptions) => {
    // Show Modal
    Vue.prototype.$navigateTo = function(component) {
      // eslint-disable-line

      if (pluginOptions && pluginOptions.router) {
        pluginOptions.router.push(component);
      } else {
        const ContentComponent = Vue.extend(component);
        const ContentInstance = new ContentComponent();
        const modalDom = ContentInstance.$mount();

        this.$root.$el.innerHTML = '';
        this.$root.$el.appendChild(modalDom.$el);
      }
    };
  },
};
export default NvwRouter;
