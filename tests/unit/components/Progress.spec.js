import { expect } from 'chai';
import { mount } from '@vue/test-utils';
import { Progress } from '../../../src/main';

describe('Progress', () => {
  // Mock up values.
  const value = 25;
  const maxValue = 50;

  const percentValue = value <= maxValue ? Math.floor((value / maxValue) * 100) + '%' : 100 + '%';

  const wrapper = mount(Progress, {
    propsData: {
      value,
      maxValue,
    },
  });

  describe('the component received given props correctly.', () => {
    it(`Given value property is equal to ${value}.`, () => {
      expect(wrapper.props().value).to.equal(value);
    });
    it(`Given maxValue property is equal to ${maxValue}.`, () => {
      expect(wrapper.props().maxValue).to.equal(maxValue);
    });
  });

  describe('Find child elements of progress bar', () => {
    it('there is one bar DOM inside the layout.', () => {
      const childCount = wrapper.findAll('div').length;

      // The number increased because "findAll" finding with container.
      expect(childCount).to.equal(2);
    });
  });

  describe('Check Styles', () => {
    it('Progress bar width is it correct value.', () => {
      const barContainer = wrapper.findAll('div').at(1);
      expect(barContainer.element.style.width).to.equal(percentValue);
    });
  });

  describe('Listen to events', () => {
    it(`assert event has been emitted one time`, () => {
      wrapper.setProps({ value: 60 });
      expect(wrapper.emitted('valueChange').length).to.equal(1);
    });
  });

  describe('Changing Props', () => {
    it(`Changing value prop ${value} to 60 and value must be max 100%`, () => {
      wrapper.setProps({ value: 60 });
      const barContainer = wrapper.findAll('div').at(1);
      expect(barContainer.element.style.width).to.equal('100%');
    });

    it(`Changing maxValue prop ${maxValue} to 100 and width must be ${value}/100: 25%`, () => {
      wrapper.setProps({ value: value });
      wrapper.setProps({ maxValue: 100 });
      const barContainer = wrapper.findAll('div').at(1);
      expect(barContainer.element.style.width).to.equal('25%');
    });
  });
});
