import { expect } from 'chai';
import { mount } from '@vue/test-utils';
import { Frame } from '../../../src/main';

describe('Frame.vue', () => {
  const wrapper = mount(Frame, {
    name: 'Frame',
  });
  describe('the component contains exactly one div and one slot.', () => {
    it('there is one div.', () => {
      expect(wrapper.contains('div')).to.equal(true);
      expect(wrapper.findAll('div').length).to.equal(1);
    });
  });
});
