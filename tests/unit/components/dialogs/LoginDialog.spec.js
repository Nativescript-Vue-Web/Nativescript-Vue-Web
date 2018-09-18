import { expect } from 'chai';
import { mount } from '@vue/test-utils';
import LoginDialog from '../../../../src/components/dialogs/LoginDialog';
import Button from '../../../../src/components/Button';
import TextField from '../../../../src/components/TextField';

describe('LoginDialog', () => {
  // LoginDialog mock up values.
  const title = 'Nu-Login Dialog';
  const message = 'Nu-Login Dialog Message';
  const cancelButtonText = 'Cancel';
  const okButtonText = 'Login';
  const userName = 'Username*';
  const password = 'Password*';

  // Initializing the component.
  const wrapper = mount(LoginDialog, {
    name: 'LoginDialog',
    props: {
      title: String,
      message: String,
      okButtonText: String,
      cancelButtonText: String,
      userName: String,
      password: String,
    },
    propsData: {
      title,
      message,
      okButtonText,
      cancelButtonText,
      userName,
      password,
    },
  });
  wrapper.setData({ isModalVisible: true });
  describe('the component receives given events correctly.', () => {
    it(`title property is equal to: ${title}.`, () => {
      expect(wrapper.props().title).to.equal(title);
    });
    it(`message property is equal to: ${message}.`, () => {
      expect(wrapper.props().message).to.equal(message);
    });
    it(`okButtonText property is equal to: ${okButtonText}.`, () => {
      expect(wrapper.props().okButtonText).to.equal(okButtonText);
    });
    it(`cancelButtonText property is equal to: ${cancelButtonText}.`, () => {
      expect(wrapper.props().cancelButtonText).to.equal(cancelButtonText);
    });
    it(`userName property is equal to: ${userName}.`, () => {
      expect(wrapper.props().userName).to.equal(userName);
    });
    it(`password property is equal to: ${password}.`, () => {
      expect(wrapper.props().password).to.equal(password);
    });
  });
  describe('the component contains exactly two Button, two TextField.', () => {
    it('there are two Button.', done => {
      expect(wrapper.contains(Button)).to.equal(true);
      expect(wrapper.findAll(Button).length).to.equal(2);
      done();
    });
    it('there are two TextField.', done => {
      expect(wrapper.contains(TextField)).to.equal(true);
      expect(wrapper.findAll(TextField).length).to.equal(2);
      done();
    });
  });

  describe('Events testing', () => {
    it('the click event of ok Button is passed to the component successfully and the login dialog gets hidden.', () => {
      const button = wrapper.find('.login-dialog__footer__ok-button');
      button.trigger('click');
      expect(wrapper.vm.isModalVisible).to.equal(false);
    });
  });
});
