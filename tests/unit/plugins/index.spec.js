import { expect } from 'chai';
import { createLocalVue, mount } from '@vue/test-utils';
import { Nvw, Label } from '../../../src/main';

describe('Fonticon Filter Testing', () => {
  const localVue = createLocalVue();
  localVue.use(Nvw);

  const component = {
    template: `<Label :text="'fa-search' | fonticon" />`,
    components: { Label },
  };

  const wrapper = mount(component, {
    localVue,
    attachToDocument: true,
  });

  it('Font class checking', () => {
    expect(wrapper.find('span').classes()).to.includes('fa-search');
  });
});

describe('$showModal testing', () => {
  const localVue = createLocalVue();
  localVue.use(Nvw);

  const component = {
    template: `
          <div>
            <button class="first_button">
              Click to show AlertDialog
            </button>
            <button class="second_button">
              Click to show AlertDialog
            </button>
          </div>
        `,
  };

  mount(component, {
    localVue,
    attachToDocument: true,
  });

  it('Font class checking', () => {
    localVue.prototype.$showModal(component, { fullscreen: true });
    localVue.prototype.$showModal(component, { fullscreen: true, props: { title: 'nvw' } });

    expect(typeof localVue.prototype.$showModal).to.equal('function');
  });
});
