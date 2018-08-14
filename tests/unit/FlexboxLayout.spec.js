import { expect } from 'chai';
import { mount } from '@vue/test-utils';
import { FlexboxLayout, TextField, Label } from '../../src/main';

describe('FlexboxLayout', () => {
  // FlexboxLayout Mock up values.
  const flexDirection = 'row';
  const justifyContent = 'space-between';
  const alignContent = 'center';

  // TextField Mock up values.
  const text = 'initial string';
  const secure = true;
  const editable = true;
  const maxLength = 10;
  const keyboardType = 'email';
  const hint = 'some placeholder';
  const autoCorrect = false;

  const TextFieldWrapper = {
    render(h) {
      return h(TextField, {
        props: {
          maxLength,
          editable,
          keyboardType,
          secure,
          hint,
          text,
          autoCorrect,
        },
        attrs: {
          height: '120',
          alignSelf: 'center',
        },
      });
    },
  };

  const LabelWrapper = {
    render(h) {
      return h(Label, {
        props: {
          text: 'here is the label',
        },
        attrs: {
          height: 120,
          alignSelf: 'flex-start',
        },
      });
    },
  };

  const flexboxLayoutWrapper = mount(FlexboxLayout, {
    name: 'FlexboxLayout',
    // This will converted to props.
    props: {
      flexDirection: String,
      flexWrap: String,
      justifyContent: String,
      alignItems: String,
      alignContent: String,
    },
    propsData: {
      flexDirection,
      justifyContent,
      alignContent,
    },
    slots: {
      default: [TextFieldWrapper, LabelWrapper],
    },
    components: {
      TextField,
    },
    attrs: {
      height: 250,
    },
  });

  describe('the component receives given props correctly.', () => {
    it(`flexDirection property is equal to ${flexDirection}`, () => {
      expect(flexboxLayoutWrapper.props().flexDirection).to.equal(flexDirection);
    });
    it(`justifyContent property is equal to ${justifyContent}`, () => {
      expect(flexboxLayoutWrapper.props().justifyContent).to.equal(justifyContent);
    });
    it(`alignContent property is equal to ${alignContent}`, () => {
      expect(flexboxLayoutWrapper.props().alignContent).to.equal(alignContent);
    });
  });

  describe('the attributes are passed to the style of the component sucessfully.', () => {
    it(`flexDirection attribute which is '${flexDirection}' is passed to the style correctly.`, () => {
      expect(flexboxLayoutWrapper.element.style.flexDirection).to.equal(flexDirection);
    });
    it(`justifyContent attribute which is '${justifyContent}' is passed to the style correctly.`, () => {
      expect(flexboxLayoutWrapper.element.style.justifyContent).to.equal(justifyContent);
    });
    it(`alignContent attribute which is '${alignContent}' is passed to the style correctly.`, () => {
      expect(flexboxLayoutWrapper.element.style.alignContent).to.equal(alignContent);
    });
  });

  describe('the component has child components in its slots.', () => {
    describe('flexbox layout contains textfield component', () => {
      it('there is one textfield component inside the layout.', () => {
        const textfieldWrappers = flexboxLayoutWrapper.findAll(TextField).wrappers;
        expect(textfieldWrappers.length).to.equal(1);
      });
      it('the textfield works as expected inside the flexbox layout', () => {
        const textfieldWrappers = flexboxLayoutWrapper.findAll(TextField).wrappers;
        const textfield = textfieldWrappers[0].find('input');
        textfield.setValue('some string');
        expect(textfield.element.value).to.equal('some string');
      });
    });

    describe('flexbox layout contains label component', () => {
      it('there is one label component inside the layout.', () => {
        const labelWrappers = flexboxLayoutWrapper.findAll(Label).wrappers;
        expect(labelWrappers.length).to.equal(1);
      });

      it('label component displays the given text prop(`here is the label`) correctly inside the layout.', () => {
        const labelWrappers = flexboxLayoutWrapper.findAll(Label).wrappers;
        const label = labelWrappers[0].find('div');
        expect(label.element.textContent.trim()).to.equal('here is the label');
      });
    });
  });
});
