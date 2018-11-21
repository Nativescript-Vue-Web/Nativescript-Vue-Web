import { expect } from 'chai';
import { mount } from '@vue/test-utils';
import { ScrollView, Label } from '../../../src/main';

describe('ScrollView', () => {
  // Mock up values.
  const orientation = 'horizontal';
  const scrollBarIndicatorVisible = true;

  const Label1 = {
    render(h) {
      return h(Label, {
        props: {
          text:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed convallis, libero ut vehicula hendrerit, urna massa porta nulla, ' +
            'id condimentum nulla elit sodales lacus. Nulla fringilla pulvinar viverra. Nam pulvinar aliquam risus ut molestie. Interdum et' +
            ' malesuada fames ac ante ipsum primis in faucibus. Sed faucibus pharetra diam, eget feugiat velit porttitor vitae. In vulputate' +
            ' maximus ligula, vel venenatis orci tempus a. Vestibulum in quam eget lectus bibendum condimentum. Vestibulum eleifend aliquet ' +
            'quam in interdum. Nulla facilisi.',
        },
      });
    },
  };

  const wrapper = mount(ScrollView, {
    propsData: {
      orientation,
      scrollBarIndicatorVisible,
    },
    attrs: {
      width: '50',
      height: '30',
    },
    slots: {
      default: [Label1],
    },
  });

  describe('the component received given props correctly.', () => {
    it(`Given value property is equal to ${orientation}.`, () => {
      expect(wrapper.props().orientation).to.equal(orientation);
    });
    it(`Given maxValue property is equal to ${scrollBarIndicatorVisible}.`, () => {
      expect(wrapper.props().scrollBarIndicatorVisible).to.equal(scrollBarIndicatorVisible);
    });
  });

  describe('Listen to events', () => {
    it('Scroll event check', done => {
      // Scroll event can't trigger with vue-test-util so triggered manually.
      wrapper.trigger('scroll');

      // waiting debounce
      setTimeout(() => {
        expect(wrapper.emitted().scroll.length).to.equal(1);
        done();
      }, 200);
    });
  });

  describe('the component receives given props correctly.', () => {
    it(`Orientation property is equal to horizontal`, () => {
      expect(wrapper.classes()).to.include('nvw-scrollview--horizontal');
    });

    it(`Changing orientation property to vertical and it must be equal to vertical`, () => {
      wrapper.setProps({ orientation: 'vertical' });
      expect(wrapper.classes()).to.include('nvw-scrollview--vertical');
      expect(wrapper.classes()).to.not.include('nvw-scrollview--horizontal');
    });

    it(`Changing scrollBarIndicatorVisible property`, () => {
      wrapper.setProps({ scrollBarIndicatorVisible: !scrollBarIndicatorVisible });
      expect(wrapper.props().scrollBarIndicatorVisible).to.equal(!scrollBarIndicatorVisible);
    });
  });
});
