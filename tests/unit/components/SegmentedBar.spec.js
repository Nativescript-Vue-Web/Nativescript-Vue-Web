import { expect } from 'chai';
import { mount } from '@vue/test-utils';
import { SegmentedBar, SegmentedBarItem, Button } from '../../../src/main.js';

describe('SegmentedBar', () => {
  const segmentedWrapper = {
    render(h) {
      return h(SegmentedBarItem, {
        props: {
          title: 'SegmentedBarItemTitle',
        },
      });
    },
  };
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
    slots: {
      default: [segmentedWrapper],
    },
    components: {
      Button,
      SegmentedBarItem,
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
  // TODO: to be done when the segmentedBarItem component is complete.
  // describe('Event testing', () => {
  //   it('button click event passed successfully.', () => {
  //     wrapper
  //       .findAll('button')
  //       .at(0)
  //       .trigger('click');
  //   });
  // });
});
