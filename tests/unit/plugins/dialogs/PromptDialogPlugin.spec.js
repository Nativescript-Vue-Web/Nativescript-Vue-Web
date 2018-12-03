import { expect } from 'chai';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import { Nvw } from '../../../../src/main';

describe('Prompt Dialog Plugin Testing', () => {
  const localVue = createLocalVue();
  localVue.use(Nvw);

  const title = 'some title';
  const message = 'some message';
  const cancelButtonText = 'cancel';
  const okButtonText = 'Submit';
  const defaultText = 'some text*';
  const { prompt } = window;
  const tap = () => prompt(message, defaultText).then(msg => msg);
  const tapWithDefaultButtonText = () => prompt({ title, message, okButtonText, cancelButtonText, defaultText }).then(msg => msg);
  const component = {
    methods: {
      tap,
      tapWithDefaultButtonText,
    },
    template: `
          <div>
            <button class="first_button" @click="tap">
              Click to show toast
            </button>
            <button class="second_button" @click="tapWithDefaultButtonText">
              Click to show toast
            </button>
          </div>
        `,
  };

  const wrapper = shallowMount(component, {
    localVue,
    attachToDocument: true,
  });

  describe('Prompt Dialog Component is visible in the document.', () => {
    it(`The Prompt Dialog is shown on the document.`, done => {
      wrapper.find('.first_button').trigger('click');
      setTimeout(() => {
        expect(document.querySelector('.nvw-prompt-dialog')).to.not.be.null;
        document.querySelector('.nvw-modal-dialog').click();
        done();
      }, 500);
    });
    it(`The title inside the header slot of the element equals to ${title}.`, done => {
      wrapper.find('.first_button').trigger('click');
      setTimeout(() => {
        expect(
          document
            .querySelector('.nvw-prompt-dialog__header')
            .firstChild.textContent.trim()
            .toLowerCase(),
        ).to.equal('prompt');
        document.querySelector('.nvw-modal-dialog').click();
        done();
      }, 500);
    });
    it(`The message inside the body slot of the element equals to ${message}.`, done => {
      wrapper.find('.first_button').trigger('click');
      setTimeout(() => {
        expect(document.querySelector('.nvw-prompt-dialog__body').textContent.trim()).to.equal(message);
        expect(
          document
            .querySelector('.nvw-prompt-dialog__footer__cancel-button')
            .textContent.trim()
            .toLowerCase(),
        ).to.equal('cancel');
        expect(
          document
            .querySelector('.nvw-prompt-dialog__footer__ok-button')
            .textContent.trim()
            .toLowerCase(),
        ).to.equal('ok');
        document.querySelector('.nvw-modal-dialog').click();
        done();
      }, 500);
    });
  });
  describe('Prompt Dialog Component with DEFAULT PARAMS is visible in the document.', () => {
    it(`The Prompt Dialog is shown on the document.`, done => {
      wrapper.find('.second_button').trigger('click');
      setTimeout(() => {
        expect(document.querySelector('.nvw-prompt-dialog')).to.not.be.null;
        document.querySelector('.nvw-modal-dialog').click();
        done();
      }, 500);
    });
    it(`The title inside the header slot of the element equals to ${title}.`, done => {
      wrapper.find('.second_button').trigger('click');
      setTimeout(() => {
        expect(document.querySelector('.nvw-prompt-dialog__header').firstChild.textContent.trim()).to.equal(title);
        document.querySelector('.nvw-modal-dialog').click();
        done();
      }, 500);
    });
    it(`The message inside the body slot of the element equals to ${message}.`, done => {
      wrapper.find('.second_button').trigger('click');
      setTimeout(() => {
        expect(document.querySelector('.nvw-prompt-dialog__body').textContent.trim()).to.equal(message);
        expect(document.querySelector('.nvw-prompt-dialog__footer__cancel-button').textContent.trim()).to.equal(cancelButtonText);
        expect(document.querySelector('.nvw-prompt-dialog__footer__ok-button').textContent.trim()).to.equal(okButtonText);
        expect(document.querySelector('.nvw-prompt-dialog__input').value.trim()).to.equal(defaultText);
        document.querySelector('.nvw-modal-dialog').click();
        done();
      }, 500);
    });
  });
});
