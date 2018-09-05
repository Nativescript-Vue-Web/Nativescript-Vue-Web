module.exports = function(api) {
  api.cache(true);
  const presets = ['@vue/app'];
  const plugins = ['istanbul'];

  return {
    presets,
    plugins,
  };
};
