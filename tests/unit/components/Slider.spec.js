import { expect } from 'chai';
import { mount } from '@vue/test-utils';
import sinon from 'sinon';
import { Slider } from '../../../src/main';

describe('Slider', () => {
  const value = 20;
  const minValue = 40;
  const maxValue = 100;
  const valueChange = sinon.spy();

  const wrapper = mount(Slider, {
    model: {
      event: 'input',
      prop: 'value',
    },
    props: {
      value: {
        type: Number,
        default: 0,
      },
      minValue: {
        type: Number,
        default: 0,
      },
      maxValue: {
        type: Number,
        default: 100,
      },
    },
    propsData: {
      value,
      minValue,
      maxValue,
    },
    listeners: {
      valueChange,
    },
  });

  describe('The wrapper component has an input field inside a div tag.', () => {
    it('has a div as a container.', () => {
      expect(wrapper.contains('div')).to.equal(true);
    });
    it('div tags has an input field.', () => {
      expect(wrapper.find('div').contains('input')).to.equal(true);
    });
    it('the type of the input field is range.', () => {
      expect(wrapper.find('input').attributes().type).to.equal('range');
    });
  });
  describe('The wrapper component receives given props correctly.', () => {
    it(`the value prop inside the wrapper is equal to ${value}`, () => {
      expect(wrapper.props().value).to.equal(value);
    });

    it(`the minValue prop inside the wrapper is equal to ${minValue}`, () => {
      expect(wrapper.props().minValue).to.equal(minValue);
    });

    it(`the maxValue prop inside the wrapper is equal to ${maxValue}`, () => {
      expect(wrapper.props().maxValue).to.equal(maxValue);
    });

    it(`range value of the input is equal to ${value}`, () => {
      expect(parseInt(wrapper.find('input').element.value)).to.equal(value);
    });

    it('valueChange event listener is passed to the component successfully.', () => {
      expect(wrapper.vm.$listeners.valueChange).to.not.equal(undefined);
    });
  });

  describe('The wrapper component detects changes in the input field and also throw appropriate events.', () => {
    it(`slider bar gets changed, it detects the move behaviour on the bar and then, changes the value(${value}) to ${75}.`, () => {
      wrapper.find('input').setValue(75);
      wrapper.find('input').trigger('change');
      expect(valueChange.called).to.equal(true);
      expect(parseInt(wrapper.find('input').element.value)).to.equal(75);
    });
    it('the component emits the appropriate events.', () => {
      expect(wrapper.emitted().input.length).to.equal(1);
      expect(wrapper.emitted().valueChange.length).to.equal(1);
    });
  });
});
