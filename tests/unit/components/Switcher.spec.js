import { expect } from 'chai';
import { mount } from '@vue/test-utils';
import sinon from 'sinon';
import { Switcher } from '../../../src/main';

describe('Switcher', () => {
  const checked = false;
  const checkedChange = sinon.spy();
  const clickHandler = sinon.spy(Switcher.methods, 'updateValue');
  const wrapper = mount(Switcher, {
    model: {
      event: 'input',
      prop: 'checked',
    },
    props: {
      checked: {
        type: Boolean,
        default: false,
      },
    },
    propsData: {
      checked,
    },
    listeners: {
      checkedChange,
    },
  });

  describe('the switcher component is an input component and its type is checkbox.', () => {
    it('there is an input field.', () => {
      expect(wrapper.contains('input')).to.equal(true);
    });
    it('the type of the component is checkbox', () => {
      expect(wrapper.find('input').attributes().type).to.equal('checkbox');
    });
  });

  describe('The wrapper component receives given props correctly.', () => {
    it(`checked value of the input is equal to ${checked}`, () => {
      expect(wrapper.vm.checked).to.equal(checked);
    });

    it('checkedChange event listener is passed to the component successfully.', () => {
      expect(wrapper.vm.$listeners.checkedChange).to.not.equal(undefined);
    });
  });

  describe('The wrapper component detects changes in the input field and also throw appropriate events.', () => {
    it(`switcher component gets clicked, it detects the click behaviour and then, changes the value(${checked}) to ${!checked}.`, () => {
      wrapper.trigger('click');
      expect(clickHandler.called).to.equal(true);
      expect(wrapper.find('input').element.checked).to.equal(true);
    });
    it('switcher component emits input and checkedChange events correctly.', () => {
      expect(wrapper.emitted().input.length).to.equal(1);
      expect(wrapper.emitted().input[0][0]).to.equal(true);
      expect(wrapper.emitted().checkedChange.length).to.equal(1);
    });
  });
});
