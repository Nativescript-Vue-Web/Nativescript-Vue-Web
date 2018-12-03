import { expect } from 'chai';
import { mount } from '@vue/test-utils';
import sinon from 'sinon';
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

  const close = sinon.spy(LoginDialog.methods, 'close');
  const login = sinon.spy(LoginDialog.methods, 'login');

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
  describe('Change props and watch the respond.', () => {
    it('Change the prop of title.', done => {
      wrapper.setProps({ title: 'New Title' });
      expect(wrapper.props().title).to.equal('New Title');
      done();
    });
  });
  describe('the component contains exactly two NuButton, two TextField.', () => {
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
    it('Changing the value of the username and password fields.', done => {
      wrapper
        .findAll(TextField)
        .at(0)
        .setValue('ozercevikaslan');
      wrapper.setData({ uname: 'ozercevikaslan' });
      expect(wrapper.findAll(TextField).at(0).element.value).to.equal('ozercevikaslan');
      wrapper
        .findAll(TextField)
        .at(1)
        .setValue('123ozer123');
      wrapper.setData({ pw: '123ozer123' });
      expect(wrapper.findAll(TextField).at(1).element.value).to.equal('123ozer123');
      done();
    });
    it('the click event of confirm Button is passed to the component successfully and the login dialog gets hidden.', () => {
      const button = wrapper.find('.nvw-login-dialog__footer__ok-button');
      button.trigger('click');
      expect(wrapper.emitted().submit.length).to.equal(1);
      expect(wrapper.emitted().submit[0][0].userName).to.equal('ozercevikaslan');
      expect(wrapper.emitted().submit[0][0].password).to.equal('123ozer123');
      expect(login.called).to.equal(true);
      expect(wrapper.vm.isModalVisible).to.equal(false);
    });
    it('Show the dialog by changing the given v-if value and test the close method of the login dialog.', done => {
      wrapper.setData({ isModalVisible: true });
      expect(wrapper.vm.isModalVisible).to.equal(true);
      const button = wrapper.find('.nvw-login-dialog__footer__cancel-button');
      button.trigger('click');
      expect(wrapper.emitted().submit.length).to.equal(2);
      expect(wrapper.emitted().submit[1][0].result).to.equal(false);
      expect(close.called).to.equal(true);
      expect(wrapper.vm.isModalVisible).to.equal(false);
      done();
    });
  });
  const wrapper2 = mount(LoginDialog, {
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
    },
  });
  describe('Default Prop value Check', () => {
    it('Username and Pasword prop is undefined', done => {
      expect(wrapper2.props().password).to.equal(undefined);
      expect(wrapper2.props().userName).to.equal(undefined);
      wrapper2.setData({ isModalVisible: true });
      done();
    });
  });
});
