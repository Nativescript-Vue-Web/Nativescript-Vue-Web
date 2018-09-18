import { expect } from 'chai';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import { Nvw } from '../../../../src/main';

describe('Action Dialog Plugin Testing', () => {
  const localVue = createLocalVue();
  localVue.use(Nvw);

  const title = 'Some title.';
  const cancelButtonText = 'cancel';
  const options = ['First Option', 'Second Option'];
  const { action } = window;
  const tap = () => action(title, cancelButtonText, options);
  const component = {
    methods: {
      tap,
    },
    template: `
          <div>
            <button @click="tap">
              Click to show toast
            </button>
          </div>
        `,
  };

  const wrapper = shallowMount(component, {
    localVue,
    attachToDocument: true,
  });

  describe('ActionDialog is visible in the document.', () => {
    it(`The ActionDialog is shown on the document.`, done => {
      wrapper.find('button').trigger('click');
      setTimeout(() => {
        expect(document.querySelector('.nvw-action-dialog')).to.not.be.null;
        done();
      }, 500);
    });
    it(`The title inside the header slot of the element equals to ${title}.`, done => {
      wrapper.find('button').trigger('click');
      setTimeout(() => {
        expect(document.querySelector('.nvw-action-dialog__header').firstChild.textContent.trim()).to.equal(title);
        done();
      }, 500);
    });
  });
});
