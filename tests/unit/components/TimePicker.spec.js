import { expect } from 'chai';
import { mount } from '@vue/test-utils';
import { TimePicker } from '../../../src/main';

describe('TimePicker', () => {
  // Mock up values.
  const hour = 5;
  const minute = 17;
  const minHour = 1;
  const maxHour = 7;
  const minMinute = 0;
  const maxMinute = 45;

  const wrapper = mount(TimePicker, {
    name: 'TimePicker',
    props: {
      hour: Number,
      minute: Number,
      minHour: Number,
      maxHour: Number,
      minMinute: Number,
      maxMinute: Number,
    },
    propsData: {
      hour,
      minute,
      minHour,
      maxHour,
      minMinute,
      maxMinute,
    },
  });

  describe('the component receives given props correctly.', () => {
    it(`hour property is equal to: ${hour}.`, () => {
      expect(wrapper.props().hour).to.equal(hour);
    });
    it(`minute property is equal to ${minute}.`, () => {
      expect(wrapper.props().minute).to.equal(minute);
    });
    it(`min property is equal to ${minHour}:${minMinute}.`, () => {
      expect(wrapper.attributes().min).to.equal(`${minHour.toString().padStart(2, '0')}:${minMinute.toString().padStart(2, '0')}`);
    });
    it(`max property is equal to ${maxHour}:${maxMinute}.`, () => {
      expect(wrapper.attributes().max).to.equal(`${maxHour.toString().padStart(2, '0')}:${maxMinute.toString().padStart(2, '0')}`);
    });
  });

  describe('Changing Props', () => {
    it(`Changing hour prop ${hour} equal to 1.`, () => {
      wrapper.setProps({ hour: 1 });
      expect(wrapper.props().hour).to.equal(1);
    });
  });

  describe('Listen to events', () => {
    it(`assert event has been emitted one time on timeChange`, () => {
      wrapper.destroy();
      wrapper.setProps({ minute: 20 });
      expect(wrapper.emitted('timeChange').length).to.equal(1);
    });
    it(`assert event has been emitted one time on input`, () => {
      wrapper.destroy();
      wrapper.setValue('12:10');
      expect(wrapper.emitted('input').length).to.equal(1);
    });
  });
});
