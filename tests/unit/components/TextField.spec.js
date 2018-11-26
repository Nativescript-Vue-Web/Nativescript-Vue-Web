import { expect } from 'chai';
import { mount } from '@vue/test-utils';
import sinon from 'sinon';
import { TextField } from '../../../src/main';

describe('TextField', () => {
  // Mock up values.
  const text = 'initial string';
  const secure = true;
  const editable = true;
  const maxLength = 10;
  const keyboardType = 'email';
  const hint = 'some placeholder';
  const autocorrect = false;

  // Spy events.
  const updateValueSpy = sinon.spy(TextField.methods, 'updateValue');
  const blur = sinon.spy();
  const focus = sinon.spy();
  const returnPress = sinon.spy();
  const textChange = sinon.spy();
  const input = sinon.spy();

  const wrapper = mount(TextField, {
    model: {
      event: 'input',
      prop: 'text',
    },
    name: 'TextField',
    // This will converted to props.
    props: {
      maxLength: Number,
      editable: Boolean,
      keyboardType: String,
      secure: {
        type: Boolean,
        default: false,
      },
      hint: String,
      text: String,
      autocorrect: Boolean,
    },
    propsData: {
      maxLength,
      editable,
      keyboardType,
      secure,
      hint,
      text,
      autocorrect,
    },
    listeners: {
      blur,
      focus,
      returnPress,
      textChange,
      input,
    },
  });

  describe('the component receives given props correctly.', () => {
    it(`maxLength property is equal to: ${maxLength}.`, () => {
      expect(wrapper.props().maxLength).to.equal(maxLength);
    });

    it(`initial value taken from v-model is equal to: ${text}.`, () => {
      expect(wrapper.props().text).to.equal(text);
    });

    it(`hint property is equal to: ${hint}.`, () => {
      expect(wrapper.props().hint).to.equal(hint);
    });

    it(`editable property is equal to: ${editable}.`, () => {
      expect(wrapper.props().editable).to.equal(editable);
    });

    it(`secure property is equal to: ${secure}.`, () => {
      expect(wrapper.props().secure).to.equal(secure);
    });

    it(`keyboardType property is equal to ${keyboardType}.`, () => {
      expect(wrapper.props().keyboardType).to.equal(keyboardType);
    });

    it(`auto correct property is equal to: ${autocorrect}.`, () => {
      expect(wrapper.props().autocorrect).to.equal(autocorrect);
    });

    it('focus event property is passed to the component successfully.', () => {
      expect(wrapper.vm.$listeners.focus).to.not.equal(undefined);
    });

    it('change event property is passed to the component successfully.', () => {
      expect(wrapper.vm.$listeners.textChange).to.not.equal(undefined);
    });

    it('input event property is passed to the component successfully.', () => {
      expect(wrapper.vm.$listeners.input).to.not.equal(undefined);
    });

    it('blur event property is passed to the component successfully.', () => {
      expect(wrapper.vm.$listeners.blur).to.not.equal(undefined);
    });

    it('pressing return key event property is passed to the component successfully.', () => {
      expect(wrapper.vm.$listeners.returnPress).to.not.equal(undefined);
    });
  });

  describe('the input inside the component has attributes with correct values.', () => {
    it(`the maxlength attribute is equal to${maxLength}.`, () => {
      // The component returns the attribute as string so, the maxLength property is converted to string type.
      expect(wrapper.find('input').attributes().maxlength).to.equal(maxLength.toString());
    });

    it(`the placeholder attribute is equal to${hint}.`, () => {
      expect(wrapper.find('input').attributes().placeholder).to.equal(hint);
    });

    it(`the spellCheck attribute which is equivalent of autocorrect in Nativescript-Vue is equal to${autocorrect}.`, () => {
      // The component returns the attribute as string so, the autocorrect property is converted to string type.
      expect(wrapper.find('input').attributes().spellcheck).to.equal(autocorrect.toString());
    });

    it(`the disabled attribute which is equivalent of editable in Nativescript-Vue is equal to${editable}.`, () => {
      expect(wrapper.find('input').element.disabled).to.equal(!editable);
    });

    it(`the type attribute which is equivalent of keyboardType in Nativescript-Vue is equal to ${secure ? 'password' : keyboardType}.`, () => {
      if (secure) {
        expect(wrapper.find('input').attributes().type).to.equal('password');
      } else {
        expect(wrapper.find('input').attributes().type).to.equal(keyboardType);
      }
    });
  });

  describe('the attributes of the component can be changed later on.', () => {
    it('the disabled attribute of the component is changed to true from false ?', () => {
      wrapper.find('input').element.disabled = true;
      expect(wrapper.find('input').element.disabled).to.equal(true);
    });

    it(`the maxlength attribute of the component is changed to 15 from ${maxLength}?`, () => {
      wrapper.find('input').element.setAttribute('maxlength', 15);
      expect(wrapper.find('input').attributes().maxlength).to.equal('15');
    });

    it(`the placeholder(hint) attribute of the component is changed to new placeholder from ${hint}.`, () => {
      wrapper.find('input').element.setAttribute('placeholder', 'new placeholder');
      expect(wrapper.find('input').attributes().placeholder).to.equal('new placeholder');
    });

    it(`the spellCheck(autocorrect) attribute of the component is changed to true from ${autocorrect}.`, () => {
      wrapper.find('input').element.setAttribute('spellCheck', true);
      expect(wrapper.find('input').attributes().spellcheck).to.equal('true');
    });

    it(`the type(keyboardType) attribute of the component is changed to password from ${keyboardType}.`, () => {
      wrapper.find('input').element.setAttribute('type', 'password');
      expect(wrapper.find('input').attributes().type).to.equal('password');
    });
    it('the type(keyboardType) attribute of the component is changed to tel.', done => {
      wrapper.setProps({ secure: false, keyboardType: 'phone' });
      expect(wrapper.find('input').attributes().type).to.equal('tel');
      done();
    });
    it('the type(keyboardType) attribute of the component is changed to datetime.', done => {
      wrapper.setProps({ keyboardType: 'datetime' });
      expect(wrapper.find('input').attributes().type).to.equal('datetime-local');
      done();
    });
    it('the type(keyboardType) attribute of the component is changed to email.', done => {
      wrapper.setProps({ keyboardType: 'email' });
      expect(wrapper.find('input').attributes().type).to.equal('email');
      done();
    });
    it('the type(keyboardType) attribute of the component is changed to url.', done => {
      wrapper.setProps({ keyboardType: 'url' });
      expect(wrapper.find('input').attributes().type).to.equal('url');
      done();
    });
    it('the type(keyboardType) attribute of the component is changed to number.', done => {
      wrapper.setProps({ keyboardType: 'number' });
      expect(wrapper.find('input').attributes().type).to.equal('number');
      done();
    });
    it('the type(keyboardType) attribute of the component is changed to irrelevant value.', done => {
      wrapper.setProps({ keyboardType: 'irrelevant' });
      expect(wrapper.find('input').attributes().type).to.equal('text');
      done();
    });
  });

  describe('the textfield detects changes in the input and also throw appropriate events.', () => {
    it('the textfield component gets focused and the focus event handler gets thrown', () => {
      // Focus to the input field.
      wrapper.find('input').trigger('focus');
      expect(wrapper.emitted().focus.length).to.equal(1);
      expect(focus.called).to.equal(true);
    });

    it('the value of the textfield component change to new value, textfield throws input and also textChange.', () => {
      // Change the value of the input field.
      wrapper.find('input').setValue('new value');
      expect(wrapper.find('input').element.value).to.equal('new value');
      expect(wrapper.emitted().input.length).to.equal(1);
      expect(wrapper.emitted().textChange.length).to.equal(1);
      expect(input.called).to.equal(true);
      expect(textChange.called).to.equal(true);
      expect(updateValueSpy.called).to.equal(true);
    });

    it('the textfield loses its focus and throws blur event so, the blur event handler gets thrown', () => {
      wrapper.find('input').trigger('blur');
      expect(wrapper.emitted().blur.length).to.equal(1);
      expect(blur.called).to.equal(true);
    });

    it('the user pushes the enter button to return a value so, event handler named returnPress gets thrown', () => {
      wrapper.find('input').trigger('keyup.enter');
      expect(wrapper.emitted().returnPress.length).to.equal(1);
      expect(returnPress.called).to.equal(true);
    });
  });
});
