import { expect } from 'chai';
import { mount } from '@vue/test-utils';
import sinon from 'sinon';
import DatePicker from '../../../src/components/DatePicker';

describe('DatePicker Unit Test.', () => {
  // Mock up values.
  const date = new Date('2018-07-18');
  const minDate = new Date('2012-07-11');
  const maxDate = new Date('2020-07-29');
  const dateChange = sinon.spy();

  const updateValueSpy = sinon.spy(DatePicker.methods, 'updateValue');

  const wrapper = mount(DatePicker, {
    model: {
      event: 'input',
      prop: 'date',
    },
    name: 'DatePicker',
    props: {
      date: Date,
      minDate: Date,
      maxDate: Date,
      day: Number,
      month: Number,
      year: Number,
    },
    propsData: {
      minDate,
      maxDate,
      dateChange,
      date,
    },
    listeners: {
      dateChange,
    },
  });

  describe('the component receives given props correctly.', () => {
    it(`initial value taken from v-model is equal to: ${date}.`, done => {
      expect(wrapper.props().date).to.equal(date);
      done();
    });
    it(`minDate prop is equal to: ${minDate}.`, done => {
      expect(wrapper.props().minDate).to.equal(minDate);
      done();
    });
    it(`maxDate prop is equal to: ${maxDate}.`, done => {
      expect(wrapper.props().maxDate).to.equal(maxDate);
      done();
    });

    it('pressing return key event property is passed to the component successfully.', done => {
      expect(wrapper.vm.$listeners.dateChange).to.not.equal(undefined);
      done();
    });
  });

  describe('the input inside the component has attributes with correct values.', () => {
    it(`the maxDate attribute is equal to${maxDate}.`, done => {
      const maxDateAttr = wrapper.find('input').attributes().max;
      expect(new Date(maxDateAttr).toLocaleDateString()).to.equal(maxDate.toLocaleDateString());
      done();
    });
    it(`the minDate attribute is equal to${minDate}.`, done => {
      const minDateAttr = wrapper.find('input').attributes().min;
      expect(new Date(minDateAttr).toLocaleDateString()).to.equal(minDate.toLocaleDateString());
      done();
    });
  });

  describe('Changing the prop and then check the value inside the input element.', () => {
    it('Changing the maxDate property.', done => {
      wrapper.setProps({ maxDate: new Date('2018-08-22') });
      const maxDateProp = wrapper.props().maxDate.toLocaleDateString();
      expect(maxDateProp).to.equal(new Date('2018-08-22').toLocaleDateString());
      done();
    });
    it('Changing the minDate property.', done => {
      wrapper.setProps({ minDate: new Date('2014-08-22') });
      const minDateProp = wrapper.props().minDate.toLocaleDateString();
      expect(minDateProp).to.equal(new Date('2014-08-22').toLocaleDateString());
      done();
    });
  });
  describe('Change the value inside input element and check the emitted events.', () => {
    it('The value inside the input will be set to "2017-08-22" and the dateChange event will be emitted.', done => {
      wrapper.find('input').setValue(new Date('2017-08-22').toISOString().split('T', 1)[0]);
      expect(updateValueSpy.called).to.equal(true);
      expect(wrapper.emitted().input.length).to.equal(1);
      const newDate = new Date(wrapper.emitted().input[0][0]).toISOString().split('T', 1)[0];
      expect(newDate).to.equal(new Date('2017-08-22').toISOString().split('T', 1)[0]);
      done();
    });
  });
  it('DateChange event is also emitted.', () => {
    wrapper.find('input').trigger('change');
    expect(wrapper.emitted().dateChange.length).to.equal(1);
    expect(dateChange.called).to.equal(true);
  });
});
