import { expect } from 'chai';
import { mount } from '@vue/test-utils';
import sinon from 'sinon';
import SearchBar from '../../../src/components/SearchBar';

describe('SearchBar Test.', () => {
  // Mock up values.
  const text = 'search smt...';
  const hint = 'some hint...';
  const textFieldBackgroundColor = 'blue';
  const textFieldHintColor = 'red';
  const updateValueSpy = sinon.spy(SearchBar.methods, 'updateValue');
  const onClear = sinon.spy(SearchBar.methods, 'onClear');

  // Mock up listeners.
  const clear = sinon.spy();
  const submit = sinon.spy();
  const textChange = sinon.spy();
  const input = sinon.spy();

  const wrapper = mount(SearchBar, {
    name: 'SearchBar',
    model: {
      event: 'input',
      prop: 'text',
    },
    props: {
      text: String,
      hint: String,
      textFieldBackgroundColor: String,
      textFieldHintColor: String,
    },
    propsData: {
      hint,
      text,
      textFieldBackgroundColor,
      textFieldHintColor,
    },
    listeners: {
      clear,
      submit,
      textChange,
      input,
    },
  });

  describe('the component receives given props correctly.', () => {
    it(`initial value taken from v-model is equal to: ${text}.`, () => {
      expect(wrapper.props().text).to.equal(text);
    });
    it(`hint property is equal to: ${hint}.`, () => {
      expect(wrapper.props().hint).to.equal(hint);
    });
    it('input event property is passed to the component successfully.', () => {
      expect(wrapper.vm.$listeners.input).to.not.equal(undefined);
    });
    it('change event property is passed to the component successfully.', () => {
      expect(wrapper.vm.$listeners.textChange).to.not.equal(undefined);
    });
    it('clear event property is passed to the component successfully.', () => {
      expect(wrapper.vm.$listeners.clear).to.not.equal(undefined);
    });
    it('pressing return key event property is passed to the component successfully.', () => {
      expect(wrapper.vm.$listeners.submit).to.not.equal(undefined);
    });
  });

  describe('the input inside the component has attributes with correct values.', () => {
    it(`the placeholder attribute is equal to${hint}.`, () => {
      expect(wrapper.find('input').attributes().placeholder).to.equal(hint);
    });
    it(`the disabled attribute of the input in the SearchBar.`, () => {
      expect(wrapper.find('input').element.disabled).to.equal(false);
    });
  });

  describe('SearchBar component has one input and two icons.', () => {
    it('there is one input field.', () => {
      expect(wrapper.findAll('input').length).to.equal(1);
    });
    it('there are two icons which are actually spans.', () => {
      expect(wrapper.findAll('span').length).to.equal(2);
    });
  });
  describe('the input detects changes in the input and also throw appropriate events.', () => {
    it('the value of the input component change to new value', () => {
      // Change the value of the input field.
      wrapper.find('input').setValue('new value');
      expect(wrapper.find('input').element.value).to.equal('new value');
      expect(updateValueSpy.called).to.equal(true);
      expect(wrapper.emitted().input.length).to.equal(1);
      expect(wrapper.emitted().textChange.length).to.equal(1);
      expect(input.called).to.equal(true);
      expect(textChange.called).to.equal(true);
    });
    it('the clearIcon gets clicked, the event is emitted and text becomes an empty string.', () => {
      wrapper.find('.nvw-searchbar__clear-icon').trigger('click');
      expect(onClear.called).to.equal(true);
      expect(wrapper.emitted().clear.length).to.equal(1);
      expect(clear.called).to.equal(true);
    });
    it('the value of the input component change to a new value again and then, the submit button gets clicked.', () => {
      // Change the value of the input field.
      wrapper.find('input').setValue('newest value');
      expect(wrapper.find('input').element.value).to.equal('newest value');
      expect(updateValueSpy.called).to.equal(true);
      wrapper.find('.nvw-searchbar__search-icon').trigger('click');
      expect(submit.called).to.equal(true);
      expect(wrapper.emitted().submit.length).to.equal(1);
    });
    it('the user pushes the enter button to return a value so, event handler named submit gets thrown', () => {
      wrapper.find('input').trigger('keyup.enter');
      expect(wrapper.emitted().submit.length).to.equal(2);
      expect(submit.called).to.equal(true);
    });
    it('setting listeners to null of the component so that it will not throw appropriate events.', () => {
      wrapper.vm.$listeners.input = null;
      wrapper.vm.$listeners.textChange = null;
      wrapper.vm.$listeners.clear = null;
      wrapper.find('.nvw-searchbar__clear-icon').trigger('click');
      expect(input.callCount).to.not.equal(4);
      expect(textChange.callCount).to.not.equal(4);
      expect(clear.callCount).to.not.equal(2);
    });
    it('setting listeners to null of the component so that it will not throw appropriate events.', () => {
      wrapper.vm.$listeners.input = null;
      wrapper.vm.$listeners.textChange = null;
      wrapper.find('input').setValue('tnewest value');
      expect(wrapper.emitted().input.length).to.equal(3);
      expect(wrapper.emitted().textChange.length).to.equal(3);
      expect(input.callCount).to.equal(3);
      expect(textChange.callCount).to.equal(3);
    });
  });
});
