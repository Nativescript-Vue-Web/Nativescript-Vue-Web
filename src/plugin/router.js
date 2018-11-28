const NvwRouter = {
  install: (Vue, pluginOptions) => {
    let history = [];

    Vue.prototype.$navigateTo = function(component) {
      history.push(this);
      console.log(history);// eslint-disable-line

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

    Vue.prototype.$navigateBack = function() {
      if (pluginOptions && pluginOptions.router) {
        pluginOptions.router.go(-1);
      } else {
        console.log(history); // eslint-disable-line
        console.log(this);// eslint-disable-line

        /*
        const component = history.pop();
        //const ContentComponent = Vue.extend(component);
        //const ContentInstance = new ContentComponent();
        //const modalDom = ContentInstance.$mount();
        //console.log(modalDom)
        const modalDom = component.$mount();
        console.log(component);

        //this.$root.$el.innerHTML = '';
        //this.$root.$el.appendChild(modalDom.$el);
        */
      }
    };
  },
};
export default NvwRouter;
