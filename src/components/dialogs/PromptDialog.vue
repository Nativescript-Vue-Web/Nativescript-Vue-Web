<template>
<ModalDialog v-if="isModalVisible" class="prompt-dialog" @close="close">
    <span class="prompt-dialog__header" slot="header">  
         <h4>{{ title }}</h4>
    </span>
    <div class="prompt-dialog__body" slot="body">
            <p>{{ message }}</p>
            <TextField v-model="value" hint="Enter text.." :editable="true" :keyboardType="inputType"/>
         </div>

    <div class="prompt-dialog__footer" slot="footer">
        <Button class="prompt-dialog__footer__cancel-button" :text="cancelButtonText" @tap="close" :link="true" />
        <Button class="prompt-dialog__footer__ok-button" :text="okButtonText" @tap="submit" :link="true" />      
    </div>
</ModalDialog> 

</template>

<script>
import { ModalDialog, Button, TextField } from '../../main';

export default {
  name: 'PromptDialog',
  props: {
    title: String,
    message: String,
    okButtonText: String,
    cancelButtonText: String,
    defaultText: String,
    inputType: String,
    value: '',
  },
  data() {
    return {
      isModalVisible: false,
    };
  },
  methods: {
    close: function() {
      this.isModalVisible = false;
      this.$emit('submit', null);
    },
    submit: function() {
      this.$emit('submit', {
        val: this.value,
      });
      this.isModalVisible = false;
    },
  },
  components: {
    ModalDialog,
    Button,
    TextField,
  },
};
</script>

<style lang="scss" scoped>
.prompt-dialog {
  &__footer {
    &__cancel-button {
      margin: 0 5px;
      font-size: 12px;
      background-color: #ffffff;
      color: #364fc7;

      &:hover {
        border: solid 1px #364fc7;
      }
    }
    &__ok-button {
      margin: 0 5px;
      font-size: 12px;
      background-color: #ffffff;
      color: #364fc7;

      &:hover {
        border: solid 1px #364fc7;
      }
    }
  }
}
</style>
