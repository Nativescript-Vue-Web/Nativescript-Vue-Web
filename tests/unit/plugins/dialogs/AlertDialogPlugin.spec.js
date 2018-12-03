import { expect } from 'chai';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import { Nvw } from '../../../../src/main';

describe('Alert Dialog Plugin Testing', () => {
  const localVue = createLocalVue();
  localVue.use(Nvw);

  const title = 'Some title.';
  const message = 'Some message';
  const okButtonText = 'ok';
  const { alert } = window;
  const tap = () => alert(message);
  const tapWithDefaultButtonText = () => alert({ title, message, okButtonText });

  const component = {
    methods: {
      tap,
      tapWithDefaultButtonText,
    },
    template: `
          <div>
            <button class="first_button" @click="tap">
              Click to show AlertDialog
            </button>
            <button class="second_button" @click="tapWithDefaultButtonText">
              Click to show AlertDialog
            </button>
          </div>
        `,
  };

  const wrapper = shallowMount(component, {
    localVue,
    attachToDocument: true,
  });

  describe('AlertDialog is visible in the document.', () => {
    it(`The AlertDialog is shown on the document.`, done => {
      wrapper.find('.first_button').trigger('click');
      setTimeout(() => {
        expect(document.querySelector('.nvw-alert-dialog')).to.not.be.null;
        document.querySelector('.nvw-modal-dialog').click();
        done();
      }, 500);
    });
    it(`The title inside the header slot of the element equals to ${message}.`, done => {
      wrapper.find('.first_button').trigger('click');
      setTimeout(() => {
        expect(document.querySelector('.nvw-alert-dialog__body').firstChild.textContent.trim()).to.equal(message);
        document.querySelector('.nvw-modal-dialog').click();
        done();
      }, 500);
    });
    it(`The message inside the header slot of the element equals to ${message}.`, done => {
      wrapper.find('.first_button').trigger('click');
      setTimeout(() => {
        expect(document.querySelector('.nvw-alert-dialog__body').firstChild.textContent.trim()).to.equal(message);
        expect(
          document
            .querySelector('.nvw-alert-dialog__footer__ok-button')
            .textContent.trim()
            .toLowerCase()
            .toLowerCase(),
        ).to.equal('ok');
        document.querySelector('.nvw-modal-dialog').click();
        done();
      }, 500);
    });
  });
  describe('AlertDialog with DEFAULT PARAMS is visible in the document.', () => {
    it(`The AlertDialog is shown on the document.`, done => {
      wrapper.find('.second_button').trigger('click');
      setTimeout(() => {
        expect(document.querySelector('.nvw-alert-dialog')).to.not.be.null;
        document.querySelector('.nvw-modal-dialog').click();
        done();
      }, 500);
    });
    it(`The title inside the header slot of the element equals to ${title}.`, done => {
      wrapper.find('.second_button').trigger('click');
      setTimeout(() => {
        expect(document.querySelector('.nvw-alert-dialog__header').firstChild.textContent.trim()).to.equal(title);
        document.querySelector('.nvw-modal-dialog').click();
        done();
      }, 500);
    });
    it(`The message inside the header slot of the element equals to ${message}.`, done => {
      wrapper.find('.second_button').trigger('click');
      setTimeout(() => {
        expect(document.querySelector('.nvw-alert-dialog__body').firstChild.textContent.trim()).to.equal(message);
        expect(document.querySelector('.nvw-alert-dialog__footer__ok-button').textContent.trim()).to.equal('ok');
        document.querySelector('.nvw-modal-dialog').click();
        done();
      }, 500);
    });
  });
});
