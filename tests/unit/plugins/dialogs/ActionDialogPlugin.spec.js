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
            <button class="first_button" @click="tap">
              Click to show ActionDialog
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
      wrapper.find('.first_button').trigger('click');
      setTimeout(() => {
        expect(document.querySelector('.nvw-action-dialog')).to.not.be.null;
        document.querySelector('.nvw-modal-dialog').click();
        done();
      }, 500);
    });
    it(`The title inside the header slot of the element equals to ${title}.`, done => {
      wrapper.find('.first_button').trigger('click');
      setTimeout(() => {
        expect(document.querySelector('.nvw-action-dialog__footer__cancel-button').textContent.trim()).to.equal(cancelButtonText);
        expect(document.querySelector('.nvw-action-dialog__header').firstChild.textContent.trim()).to.equal(title);
        document.querySelector('.nvw-modal-dialog').click();
        done();
      }, 500);
    });
  });
});
