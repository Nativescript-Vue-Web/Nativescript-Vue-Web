<template>
<ModalDialog v-if="isModalVisible" class="nvw-prompt-dialog" @close="close">
    <span class="nvw-prompt-dialog__header" slot="header">  
         <h4>{{ title }}</h4>
    </span>
    <div class="nvw-prompt-dialog__body" slot="body">
            <p>{{ message }}</p>
            <TextField v-model="val" hint="Enter text.." :editable="true" :keyboardType="inputType"/>
         </div>

    <div class="nvw-prompt-dialog__footer" slot="footer">
        <Button class="nvw-prompt-dialog__footer__cancel-button" :text="cancelButtonText" @tap="close" :link="true" />
        <Button class="nvw-prompt-dialog__footer__ok-button" :text="okButtonText" @tap="submit" :link="true" />      
    </div> 
</ModalDialog> 

</template>

<script>
import Button from '../Button';
import ModalDialog from '../ModalDialog';
import TextField from '../TextField';

export default {
  name: 'PromptDialog',
  data() {
    return {
      isModalVisible: false,
      val: '',
    };
  },
  props: {
    title: String,
    message: String,
    okButtonText: String,
    cancelButtonText: String,
    defaultText: String,
    inputType: String,
    value: String,
  },
  methods: {
    close: function() {
      this.$emit('submit', null);
      this.isModalVisible = false;
    },
    submit: function() {
      this.$emit('submit', {
        value: this.val,
      });
      this.isModalVisible = false;
    },
  },
  watch: {
    isModalVisible: function() {
      this.val = '';
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
.nvw-prompt-dialog {
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
