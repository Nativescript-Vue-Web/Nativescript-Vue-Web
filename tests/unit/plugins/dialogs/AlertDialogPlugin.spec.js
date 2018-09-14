import { expect } from 'chai';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import { DialogPlugin } from '../../../../src/main';

describe('Alert Dialog Plugin Testing', () => {
  const localVue = createLocalVue();
  localVue.use(DialogPlugin);

  const title = 'Some title.';
  const message = 'Some message';
  const okButtonText = 'ok';
  const { alert } = window;
  const tap = () => alert(title, message, okButtonText);
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

  describe('AlertDialog is visible in the document.', () => {
    it(`The AlertDialog is shown on the document.`, done => {
      wrapper.find('button').trigger('click');
      setTimeout(() => {
        expect(document.querySelector('.alert-dialog')).to.not.be.null;
        done();
      }, 500);
    });
    it(`The title inside the header slot of the element equals to ${title}.`, done => {
      wrapper.find('button').trigger('click');
      setTimeout(() => {
        expect(document.querySelector('.alert-dialog__header').firstChild.textContent.trim()).to.equal(title);
        done();
      }, 500);
    });
    it(`The message inside the header slot of the element equals to ${message}.`, done => {
      wrapper.find('button').trigger('click');
      setTimeout(() => {
        expect(document.querySelector('.alert-dialog__body').firstChild.textContent.trim()).to.equal(message);
        done();
      }, 500);
    });
  });
});
