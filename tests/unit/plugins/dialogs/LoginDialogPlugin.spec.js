import { expect } from 'chai';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import { Nvw } from '../../../../src/main';

describe('Login Dialog Plugin Testing', () => {
  const localVue = createLocalVue();
  localVue.use(Nvw);

  const title = 'some title';
  const message = 'some message';
  const cancelButtonText = 'Cancel';
  const okButtonText = 'Login';
  const userName = 'Username*';
  const password = 'Password*';
  const { login } = window;
  const tap = () => login({ title, message, okButtonText, cancelButtonText, userName, password }).then(msg => msg);
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

  describe('Login Dialog Component is visible in the document.', () => {
    it(`The Login Dialog is shown on the document.`, done => {
      wrapper.find('button').trigger('click');
      setTimeout(() => {
        expect(document.querySelector('.nvw-login-dialog')).to.not.be.null;
        done();
      }, 500);
    });
    it(`The title inside the header slot of the element equals to ${title}.`, done => {
      wrapper.find('button').trigger('click');
      setTimeout(() => {
        expect(document.querySelector('.nvw-login-dialog__header').firstChild.textContent.trim()).to.equal(title);
        done();
      }, 500);
    });
    it(`The message inside the body slot of the element equals to ${message}.`, done => {
      wrapper.find('button').trigger('click');
      setTimeout(() => {
        expect(document.querySelector('.nvw-login-dialog__body').textContent.trim()).to.equal(message);
        done();
      }, 500);
    });
  });
});
