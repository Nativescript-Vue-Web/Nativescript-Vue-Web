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
  const tapWithDefaultButtonText = () => confirm({ title, message });

  const component = {
    methods: {
      tap,
      tapWithDefaultButtonText,
    },
    template: `
          <div>
            <button class="first_button" @click="tap">
              Click to show ConfirmDialog
            </button>
            <button class="second_button" @click="tapWithDefaultButtonText">
              Click to show ConfirmDialog
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
      wrapper.find('.first_button').trigger('click');
      setTimeout(() => {
        expect(document.querySelector('.nvw-confirm-dialog')).to.not.be.null;
        done();
      }, 500);
    });
    it(`The title inside the header slot of the element equals to ${title}.`, done => {
      wrapper.find('.first_button').trigger('click');
      setTimeout(() => {
        expect(document.querySelector('.nvw-confirm-dialog__header').firstChild.textContent.trim()).to.equal(title);
        done();
      }, 500);
    });
    it(`The message inside the header slot of the element equals to ${message}.`, done => {
      wrapper.find('.first_button').trigger('click');
      setTimeout(() => {
        expect(document.querySelector('.nvw-confirm-dialog__body').firstChild.textContent.trim()).to.equal(message);
        expect(document.querySelector('.nvw-confirm-dialog__footer__cancel-button').textContent.trim()).to.equal(cancelButtonText);
        expect(document.querySelector('.nvw-confirm-dialog__footer__ok-button').textContent.trim()).to.equal(okButtonText);
        done();
      }, 500);
    });
  });
  describe('ConfirmDialog with DEFAULT PARAMS is visible in the document.', () => {
    it(`The ConfirmDialog is shown on the document.`, done => {
      wrapper.find('.second_button').trigger('click');
      setTimeout(() => {
        expect(document.querySelector('.nvw-confirm-dialog')).to.not.be.null;
        done();
      }, 500);
    });
    it(`The title inside the header slot of the element equals to ${title}.`, done => {
      wrapper.find('.second_button').trigger('click');
      setTimeout(() => {
        expect(document.querySelector('.nvw-confirm-dialog__header').firstChild.textContent.trim()).to.equal(title);
        done();
      }, 500);
    });
    it(`The message inside the header slot of the element equals to ${message}.`, done => {
      wrapper.find('.second_button').trigger('click');
      setTimeout(() => {
        expect(document.querySelector('.nvw-confirm-dialog__body').firstChild.textContent.trim()).to.equal(message);
        expect(document.querySelector('.nvw-confirm-dialog__footer__cancel-button').textContent.trim()).to.equal('Cancel');
        expect(document.querySelector('.nvw-confirm-dialog__footer__ok-button').textContent.trim()).to.equal('OK');
        done();
      }, 500);
    });
  });
});
