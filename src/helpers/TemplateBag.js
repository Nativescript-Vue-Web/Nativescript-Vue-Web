import VueKeyedTemplate from './VueKeyedTemplate';

export default class TemplateBag {
  constructor() {
    this._templateMap = new Map();
  }

  registerTemplate(name, condition, scopedFn) {
    this._templateMap.set(name, {
      scopedFn,
      conditionFn: this.getConditionFn(condition),
      keyedTemplate: new VueKeyedTemplate(name, scopedFn),
    });
  }

  get selectorFn() {
    let self = this;
    return function templateSelectorFn(item) {
      const iterator = self._templateMap.entries();
      let curr;
        while ((curr = iterator.next().value)) { // eslint-disable-line
        const [name, { conditionFn }] = curr;
        try {
          if (conditionFn(item)) {
            return name;
          }
        } catch (err) {
          // ignore
        }
      }
      return 'default';
    };
  }

  getConditionFn(condition) {
    return new Function('ctx', `with(ctx) { return !!(${condition}) }`);
  }

  getKeyedTemplate(name) {
    return this._templateMap.get(name).keyedTemplate;
  }

  patchTemplate(name, context) {
    return this._templateMap.get(name).scopedFn(context);
  }

  getAvailable() {
    return Array.from(this._templateMap.keys());
  }

  getKeyedTemplates() {
    return Array.from(this._templateMap.values()).map(({ keyedTemplate }) => keyedTemplate);
  }
}
