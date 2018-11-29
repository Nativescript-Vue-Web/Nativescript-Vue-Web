import { expect } from 'chai';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import { Nvw } from '../../../../src/main';

describe('Login Dialog Plugin Testing', () => {
  const localVue = createLocalVue();
  localVue.use(Nvw);

  const title = 'some title';
  const message = 'some message';
  const cancelButtonText = 'cancel button';
  const okButtonText = 'Login button';
  const userName = 'Username*';
  const password = 'Password*';
  const { login } = window;
  const tap = () => login({ title, message, okButtonText, cancelButtonText, userName, password }).then(msg => msg);
  const tapWithDefaultButtonText = () => login(message, userName, password).then(msg => msg);
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

  describe('Login Dialog with DEFAULT PARAMS Component is visible in the document.', () => {
    it(`The Login Dialog is shown on the document.`, done => {
      wrapper.find('.second_button').trigger('click');
      setTimeout(() => {
        expect(document.querySelector('.nvw-login-dialog')).to.not.be.null;
        document.querySelector('.nvw-modal-dialog').click();
        done();
      }, 500);
    });
    it(`The message inside the body slot of the element equals to ${message}.`, done => {
      wrapper.find('.second_button').trigger('click');
      setTimeout(() => {
        expect(document.querySelector('.nvw-login-dialog__body').textContent.trim()).to.equal(message);
        expect(document.querySelector('.nvw-login-dialog__footer__cancel-button').textContent.trim()).to.equal('Cancel');
        expect(document.querySelector('.nvw-login-dialog__footer__ok-button').textContent.trim()).to.equal('Ok');
        document.querySelector('.nvw-modal-dialog').click();
        done();
      }, 500);
    });
  });

  describe('Login Dialog Component is visible in the document.', () => {
    it(`The Login Dialog is shown on the document.`, done => {
      wrapper.find('.first_button').trigger('click');
      setTimeout(() => {
        expect(document.querySelector('.nvw-login-dialog')).to.not.be.null;
        document.querySelector('.nvw-modal-dialog').click();
        done();
      }, 500);
    });
    it(`The title inside the header slot of the element equals to ${title}.`, done => {
      wrapper.find('.first_button').trigger('click');
      setTimeout(() => {
        expect(document.querySelector('.nvw-login-dialog__header').firstChild.textContent.trim()).to.equal(title);
        document.querySelector('.nvw-modal-dialog').click();
        done();
      }, 500);
    });
    it(`The message inside the body slot of the element equals to ${message}.`, done => {
      wrapper.find('.first_button').trigger('click');
      setTimeout(() => {
        expect(document.querySelector('.nvw-login-dialog__body').textContent.trim()).to.equal(message);
        expect(document.querySelector('.nvw-login-dialog__footer__cancel-button').textContent.trim()).to.equal(cancelButtonText);
        expect(document.querySelector('.nvw-login-dialog__footer__ok-button').textContent.trim()).to.equal(okButtonText);
        document.querySelector('.nvw-modal-dialog').click();
        done();
      }, 500);
    });
  });
});
