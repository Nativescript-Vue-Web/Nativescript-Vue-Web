import { expect } from 'chai';
import { mount } from '@vue/test-utils';
//import sinon from 'sinon';
import { SegmentedBar } from '../../../src/main.js';

describe('SegmentedBar', () => {
  // Mock up values.
  const items = ['Segment0', 'Segment1', 'Segment2', 'Segment3'];
  const selectedIndex = 0;
  const selectedBackgroundColor = '';

  const wrapper = mount(SegmentedBar, {
    model: {
      event: 'input',
      prop: 'selectedIndex',
    },
    name: 'SegmentedBar',
    // This will converted to props.
    props: {
      items: {
        type: Array,
      },
      selectedIndex: Number,
      selectedBackgroundColor: String,
    },
    propsData: {
      items,
      selectedIndex,
      selectedBackgroundColor,
    },
  });

  describe('the component receives given props correctly.', () => {
    it(`items property is equal to: ${items}.`, () => {
      expect(wrapper.props().items).to.equal(items);
    });
    it(`selectedIndex property is equal to: ${selectedIndex}.`, () => {
      expect(wrapper.props().selectedIndex).to.equal(selectedIndex);
    });
    it(`selectedBackgroundColor property is equal to: ${selectedBackgroundColor}.`, () => {
      expect(wrapper.props().selectedBackgroundColor).to.equal(selectedBackgroundColor);
    });
  });

  describe('SegmentedBar contains button element', () => {
    it('there is one button element inside the SegmentedBar component.', () => {
      const button = wrapper.find('.nvw-segmentedBar__tabHeader').findAll('button');
      expect(button.length).to.equal(1);
    });
  });

  describe('Event testing', () => {
    it('button click event passed successfully.', () => {
      wrapper
        .findAll('button')
        .at(0)
        .trigger('click');
    });
  });
});
