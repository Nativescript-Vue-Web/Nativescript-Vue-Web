const NvwRouter = {
  install: (Vue, pluginOptions) => {
    if (typeof pluginOptions !== 'object' || pluginOptions.router === undefined) {
      throw 'NvwRouter: Router must be defined!';
    }

    const { router } = pluginOptions;

    Vue.prototype.$navigateTo = function(component) {
      router.push(component);
    };

    Vue.prototype.$navigateBack = function() {
      router.go(-1);
    };
  },
};
export default NvwRouter;
