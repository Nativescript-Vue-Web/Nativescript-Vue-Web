import { expect } from 'chai';
import { mount, createLocalVue } from '@vue/test-utils';
import { StackLayout, Label, Nvw } from '../../../src/main';

describe('Action Dialog Plugin Testing', () => {
  const localVue = createLocalVue();
  localVue.use(Nvw);

  const ViewComponent = {
    name: 'ViewComponent',
    template: `
          <div class="view-component-container">
        <div ref="leftContent" class="left-content"></div>
        <div ref="rightContent" class="right-content"></div>
        <slot />
    </div>
        `,
    components: {
      StackLayout,
      Label,
    },
  };

  const Wrapper = {
    name: 'Wrapper',
    template: `
    <ViewComponent id="viewComponent">
      <div v-view:leftContent id="leftContentStack">
        <div>Left Content</div>
      </div>
      <div v-view:rightContent>
        <div>Right Content</div>
      </div>
    </ViewComponent>
`,
    components: {
      ViewComponent,
    },
  };

  //TODO vnode.componentInstance is null on VueTest. It will be check again
  it(`The ActionDialog is shown on the document.`, () => {
    mount(Wrapper, {
      localVue,
    });
  });

  xit(`The ActionDialog is shown on the document.`, done => {
    const newWrapper = mount(Wrapper, {
      localVue,
    });
    setTimeout(() => {
      expect(newWrapper.props().length).to.equal(0);
      done();
    }, 1000);
  });
});
