import { expect } from 'chai';
import { mount } from '@vue/test-utils';
import { TabViewItem } from '../../../src/main';

describe('TabViewItem', () => {
  const id = '#id';
  const title = '#title';
  const webIcon = '#webIcon';
  const wrapper = mount(TabViewItem, {
    name: 'TabViewItem',
    props: {
      id: { default: null },
      title: { type: String, required: true },
      webIcon: String,
    },
    propsData: {
      id,
      title,
      webIcon,
    },
  });

  it(`title property is equal to: ${title}.`, () => {
    expect(wrapper.props().title).to.equal(title);
  });
  it(`change title prop to new title: ${title + '-new'}.`, () => {
    wrapper.setProps({ title: title + '-new' });
    expect(wrapper.props().title).to.equal(title + '-new');
  });
  it(`webIcon property is equal to: ${webIcon}.`, () => {
    expect(wrapper.props().webIcon).to.equal(webIcon);
  });
  it(`change webIcon prop to new webIcon: ${webIcon + '-new'}.`, () => {
    wrapper.setProps({ webIcon: webIcon + '-new' });
    expect(wrapper.props().webIcon).to.equal(webIcon + '-new');
  });
  it(`computedId is equal to: ${id}.`, () => {
    expect(wrapper.vm.computedId).to.equal(id);
  });
  it(`is active after selectedId`, () => {
    wrapper.setData({ selectedId: id });
    expect(wrapper.vm.isActive).to.equal(true);
  });
  it(`id property is equal to: ${id}.`, () => {
    expect(wrapper.props().id).to.equal(id);
  });
  it(`change id prop to new id: ${id + '-new'}.`, () => {
    wrapper.setProps({ id: id + '-new' });
    expect(wrapper.props().id).to.equal(id + '-new');
  });
});
