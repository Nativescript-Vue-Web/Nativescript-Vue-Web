import { expect } from 'chai';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import { Nvw } from '../../../../src/main';

describe('Confirm Dialog Plugin Testing', () => {
  const localVue = createLocalVue();
  localVue.use(Nvw);

  const title = 'Some title.';
  const message = 'Some message';
  const okButtonText = 'ok';
  const cancelButtonText = 'cancel';
  const { confirm } = window;
  const tap = () => confirm(title, message, okButtonText, cancelButtonText);
  const component = {
    methods: {
      tap,
    },
    template: `
          <div>
            <button @click="tap">
              Click to show dialog
            </button>
          </div>
        `,
  };

  const wrapper = shallowMount(component, {
    localVue,
    attachToDocument: true,
  });

  describe('ConfirmDialog is visible in the document.', () => {
    it(`The ConfirmDialog is shown on the document.`, done => {
      wrapper.find('button').trigger('click');
      setTimeout(() => {
        expect(document.querySelector('.nvw-confirm-dialog')).to.not.be.null;
        done();
      }, 500);
    });
    it(`The title inside the header slot of the element equals to ${title}.`, done => {
      wrapper.find('button').trigger('click');
      setTimeout(() => {
        expect(document.querySelector('.nvw-confirm-dialog__header').firstChild.textContent.trim()).to.equal(title);
        done();
      }, 500);
    });
    it(`The message inside the header slot of the element equals to ${message}.`, done => {
      wrapper.find('button').trigger('click');
      setTimeout(() => {
        expect(document.querySelector('.nvw-confirm-dialog__body').firstChild.textContent.trim()).to.equal(message);
        done();
      }, 500);
    });
  });
});
