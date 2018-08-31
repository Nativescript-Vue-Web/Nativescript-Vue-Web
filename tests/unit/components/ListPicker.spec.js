import { expect } from 'chai';
import { mount } from '@vue/test-utils';
import sinon from 'sinon';
import { ListPicker } from '../../../src/main';

describe('ListPicker', () => {
  // Mock up values.
  const items = ['value0', 'value1', 'value2', 'value3'];
  const selectedIndex = 0;
  // Spy events.
  const updateValueSpy = sinon.spy(ListPicker.methods, 'updateValue');
  const selectedIndexChange = sinon.spy();

  const wrapper = mount(ListPicker, {
    name: 'ListPicker',
    model: {
      event: 'change',
      prop: 'selectedIndex',
    },
    props: {
      items: {
        type: Array,
      },
      selectedIndex: {
        type: Number,
        default: 0,
      },
    },
    propsData: {
      items,
      selectedIndex,
    },
    listeners: {
      selectedIndexChange,
    },
  });

  describe('the component receives given props correctly.', () => {
    it(`items property is equal to: ${items}.`, () => {
      expect(wrapper.props().items).to.equal(items);
    });
    it(`selectedIndex property is equal to: ${selectedIndex}.`, () => {
      expect(wrapper.props().selectedIndex).to.equal(selectedIndex);
    });
    it(`change event property is passed to the component successfully.`, () => {
      expect(wrapper.vm.$listeners.selectedIndexChange).to.not.equal(undefined);
    });
  });

  describe('finding option element and inside value.', () => {
    it(`option element at index 1 contains value`, () => {
      expect(wrapper.findAll('option').at(1).element.value).to.equal(items[1]);
      expect(
        wrapper
          .findAll('option')
          .at(1)
          .element.textContent.trim(),
      ).to.equal(items[1]);
    });
  });

  describe('the listPicker detects changes in the input and also throw appropriate events.', () => {
    const newIndex = 2;
    it(`the option at index(${newIndex}) will be selected, the wrapper will change the value and emit expected events.`, () => {
      wrapper
        .find('select')
        .findAll('option')
        .at(newIndex)
        .setSelected();
      // setSelected method does not trigger event named input automatically.
      wrapper.find('select').trigger('input');
      expect(updateValueSpy.called).to.equal(true);
      expect(wrapper.emitted().selectedIndexChange.length).to.equal(1);
      expect(wrapper.emitted().input[0][0]).to.equal(newIndex);
      expect(wrapper.find('select').element.value).to.equal(items[newIndex]);
    });
  });
});
