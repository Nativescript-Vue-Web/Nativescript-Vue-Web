import { expect } from 'chai';
import { mount } from '@vue/test-utils';
import sinon from 'sinon';
import Gestures from '../../../src/mixins/GestureMixin';
import StackLayout from '../../../src/layouts/StackLayout';

describe('Gesture Mixin Unit Test.', () => {
  let mockGesture;
  const tap = sinon.spy();
  const doubleTap = sinon.spy();
  const longPress = sinon.spy();
  const touch = sinon.spy();
  let wrapper;
  before(() => {
    mockGesture = {
      $listeners: {
        tap,
        doubleTap,
        longPress,
        touch,
      },
      $el: {
        addEventListener: sinon.spy(),
        removeEventListener: sinon.spy(),
      },
    };
    wrapper = mount(StackLayout, {
      listeners: {
        tap,
        longPress,
        doubleTap,
        touch,
      },
      template: `<StackLayout @tap="onTap" :width="width" height="height" />`,
      methods: {
        onTap: event => event,
      },
      attrs: {
        backgroundColor: 'red',
        width: 400,
        height: 400,
      },
    });
  });

  describe('Gesture Mixin has two hooks in its life cycle, mounted and beforeDestroy.', () => {
    it('First life cycle hook is mounted.', done => {
      Gestures.mounted.call(mockGesture);
      expect(mockGesture.$el.addEventListener.called).to.equal(true);
      done();
    });
    it('Second life cycle hook is beforeDestroy.', done => {
      Gestures.beforeDestroy.call(mockGesture);
      expect(mockGesture.$el.removeEventListener.called).to.equal(true);
      done();
    });
  });
  describe('StackLayout is now able to be supporting tap, doubleTap, longPress and touch gestures.', () => {
    it('StackLayout will be clicked and it will emit tab event.', done => {
      wrapper.find(StackLayout).trigger('click', { detail: 1 });
      expect(tap.called).to.equal(true);
      expect(wrapper.emitted().tap.length).to.equal(1);
      done();
    });
    it('StackLayout will be double-clicked and it will emit doubleTap event.', done => {
      wrapper.find(StackLayout).trigger('dblclick');
      expect(doubleTap.called).to.equal(true);
      expect(wrapper.emitted().doubleTap.length).to.equal(1);
      done();
    });
    it('StackLayout will be right-clicked which is called contextmenu event and it will emit longPress event.', done => {
      wrapper.find(StackLayout).trigger('contextmenu');
      expect(longPress.called).to.equal(true);
      expect(wrapper.emitted().longPress.length).to.equal(1);
      done();
    });
    it('StackLayout will be touched which is mousedown and it will emit touch event.', done => {
      wrapper.find(StackLayout).trigger('mousedown');
      expect(touch.called).to.equal(true);
      expect(wrapper.emitted().touch.length).to.equal(1);
      done();
    });
  });
});
