import {expect} from 'chai';
import {shallow} from '@vue/test-utils';
import Button from '../../lib/components/Button.vue';

describe('Button.vue', () => {
    it('renders props.msg when passed', () => {
        const text = 'Name';
        const wrapper = shallow(Button, {
            propsData: {text},
        });
        expect(wrapper.text()).to.include(text);
    });
});
