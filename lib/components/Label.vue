<template>
  <div :style="containerStyle">
    <span :style="labelStyle">{{text}}</span>
  </div>
</template>

<script>
export default {
    name: 'Label',
    props: [
        'text',
        'left',
        'top',
        'dock',
        'stretchLastChild',
        'width',
        'height',
        'order',
        'flexGrow',
        'flexShrink',
        'alignSelf',
        'flexWrapBefore',
        'row',
        'col',
        'rowSpan',
        'colSpan',
    ],
    data () {
        return {
            labelStyle: '',
            containerStyle: '',  
        };
    },
    mounted () {
        // Find out the parent component is a layout component or not.
        if (Number.isInteger(parseInt(this.left)) && Number.isInteger(parseInt(this.top)) && this.$parent.$options._componentTag == 'AbsoluteLayout') {
            // AbsoluteLayout does not work as expected thus it only accepts a span element but, here we also have a div component on top of the span element.
            // The div component breaks the view.
            // To observe the AbsoluteLayout, within template tag above leave the span tags alone (exclude divs which are being used in other layouts).
            // Assigning some style to the label.
            this.labelStyle = `left: ${this.left}px; top: ${this.top}px; background-color: blue; text-align: center; `;
            this.containerStyle = '';
        } else if (this.$parent.$options._componentTag == 'DockLayout') {
            // Dock Layout.
            this.labelStyle = 'text-align: center;';
            // Get children components from the parent.
            const { $children } = this.$parent;
            // Map children array to find this component itself.
            $children.map((obj, key) => {
                if(obj.$el == this.$el) {
                // Here, we found the component inside the children array.
                    switch (this.dock) {
                    case 'left':
                        this.containerStyle = `flex-direction: column; flex: 1 1 0; max-width: ${this.width ? this.width : 40}px; background-color: green;`;
                        break;
                    case 'top':
                        this.containerStyle = `flex-direction: row; flex: 15 1 0; max-height: ${this.height ? this.height : 40}px; background-color: blue;`;
                        break;
                    case 'right':
                        this.containerStyle = `flex-direction: column; flex: 0 auto 0; max-width: ${this.width ? this.width : 40}px; background-color: cyan;`;
                        break;
                    case 'bottom':
                        this.containerStyle = `flex-direction: row; flex: 82%; max-height: ${this.height ? this.height : 40}px; background-color: aquamarine;`;
                        break;
                    default:
                        break;
                    }
                    // Check the component is the last child.
                    if(key == $children.length-1) {
                        // Check the given prop called stretchLastChild is true.
                        if(this.stretchLastChild) {
                            // Here we stretch the last component inside the DockLayout.
                            console.log('Stretch the last child !');
                        }
                    }
                    console.log(`${key}`);
                }
            });
        } else if (this.$parent.$options._componentTag == 'FlexboxLayout') {
            // Flexbox Layout.
            this.labelStyle = 'text-align: center;';
            this.containerStyle = `
            flex: 1;
            background-color: green; 
            margin: 10px; 
            height: ${this.height}px; 
            width: ${this.width}px; 
            order: ${this.order};
            flex-grow: ${this.flexGrow};
            flexShrink: ${this.flexShrink};
            alignSelf: ${this.alignSelf}
            flex-wrap: ${this.flexWrapBefore ? 'wrap' : 'nowrap'};
          `;
        } else if (this.$parent.$options._componentTag == 'GridLayout') {
            // Grid Layout.
            this.labelStyle = 'text-align: center;';
            // Get children components from the parent.
            this.containerStyle = '';
        } else if (this.$parent.$options._componentTag == 'WrapLayout') {
            console.log(this.$parent.$options._componentTag);
            // Wrap Layout.
            this.labelStyle = 'text-align: center;';
            this.containerStyle = `width: ${this.width}; height: ${this.height}; background-color: green;`;
        }
    },
};
</script>

<style scoped lang='scss'>
  .container {
    flex-direction: column;
    display: flex;
    flex-flow: column;
    max-width: 75px;
  }
</style>
