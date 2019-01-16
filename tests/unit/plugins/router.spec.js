import { expect } from 'chai';
import { createLocalVue } from '@vue/test-utils';
import { NvwRouter } from '../../../src/main';

describe('NvwRouter Testing', () => {
  it('check plugin installation', () => {
    const localVue = createLocalVue();
    const mockRouter = {};

    expect(function() {
      localVue.use(NvwRouter);
    }).to.throw('NvwRouter: Router must be defined!');

    expect(function() {
      localVue.use(NvwRouter, { router: undefined });
    }).to.throw('NvwRouter: Router must be defined!');

    localVue.use(NvwRouter, { router: mockRouter });

    expect(localVue.prototype.$navigateTo).to.be.a('function');
    expect(localVue.prototype.$navigateBack).to.be.a('function');
  });

  it('check plugin navigateTo', () => {
    const localVue = createLocalVue();
    const mockRouter = {
      lastPushedComponent: undefined,
      push(component) {
        this.lastPushedComponent = component;
      },
    };

    localVue.use(NvwRouter, { router: mockRouter });

    let myDummyComponent = new Object();
    localVue.prototype.$navigateTo(myDummyComponent);
    expect(mockRouter.lastPushedComponent).to.equal(myDummyComponent);
  });

  it('check plugin navigateBack', () => {
    const localVue = createLocalVue();
    const mockRouter = {
      lastGoParameter: undefined,
      go(param) {
        this.lastGoParameter = param;
      },
    };

    localVue.use(NvwRouter, { router: mockRouter });
    localVue.prototype.$navigateBack();
    expect(mockRouter.lastGoParameter).to.equal(-1);
  });
});
