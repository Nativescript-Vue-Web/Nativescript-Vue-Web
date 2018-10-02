import { expect } from 'chai';
import { mount } from '@vue/test-utils';
import { SegmentedBar, SegmentedBarItem, Button } from '../../../src/main.js';

describe('SegmentedBar', () => {
  // Mock up values.
  const items = ['Segment0', 'Segment1', 'Segment2', 'Segment3'];
  const selectedIndex = 0;
  const selectedBackgroundColor = '';

  const ButtonWrapper = {
    render(h) {
      return h(Button, {
        props: {
          text: 'Button Text',
        },
      });
    },
  };
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
      default: [ButtonWrapper],
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
  describe('segmentedBar component contains div element and SegmentedBarItem component.', () => {
    it('there is div element inside the segmentedBar.', () => {
      expect(wrapper.contains('div')).to.equal(true);
    });
    it('there is segmentedBarItem component inside the segmentedBar.', () => {
      expect(wrapper.contains(SegmentedBarItem)).to.equal(true);
    });
  });
  describe('Style testing of the SegmentedBar.', () => {
    it('items are valid so the class must be "nvw-segmentedBar__tabHeader".', done => {
      expect(wrapper.find('.nvw-segmentedBar__tabHeader').exists()).to.equal(true);
      done();
    });
    it('items are null so the class must be "nvw-segmentedBar__slots".', done => {
      expect(wrapper.find('.nvw-segmentedBar__slots').exists()).to.equal(true);
      done();
    });
  });

  describe('segmentedBar component contains Button component', () => {
    it('there is Button component inside the segmentedBar.', () => {
      const segmentedBarItemWrappers = wrapper.find('.nvw-segmentedBar__slots').findAll(Button).wrappers;
      expect(segmentedBarItemWrappers.length).to.equal(1);
    });
    it('button component displays the given text prop{`Button Text`} correctly inside the segmentedBar.', () => {
      const buttonWrappers = wrapper.find('.nvw-segmentedBar__slots').findAll(Button).wrappers;
      const button = buttonWrappers[0].find(Button);
      expect(button.element.textContent.trim()).to.equal('Button Text');
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
