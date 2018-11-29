<template>
  <ModalDialog v-if="isModalVisible" class="nvw-prompt-dialog" @close="close">
    <span class="nvw-prompt-dialog__header" slot="header">{{ title }}</span>
    <div class="nvw-prompt-dialog__body" slot="body">
      <div class="nvw-prompt-dialog__message">{{ message }}</div>
      <TextField class="nvw-prompt-dialog__input" v-model="defaultText" hint="Enter text.." :editable="true"/>
    </div>

    <div class="nvw-prompt-dialog__footer" slot="footer">
      <Button
        class="nvw-prompt-dialog__footer__cancel-button"
        :text="cancelButtonText"
        @tap="close"
        :link="true"
      />
      <Button
        class="nvw-prompt-dialog__footer__ok-button"
        :text="okButtonText"
        @tap="submit"
        :link="true"
      />
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
    };
  },
  props: {
    title: {
      type: String,
      default: 'Prompt',
    },
    message: String,
    okButtonText: {
      type: String,
      default: 'Ok',
    },
    cancelButtonText: {
      type: String,
      default: 'Cancel',
    },
    defaultText: String,
  },
  methods: {
    close: function() {
      this.$emit('submit', {
        result: false,
        text: this.defaultText,
      });
      this.isModalVisible = false;
    },
    submit: function() {
      this.$emit('submit', {
        result: true,
        text: this.defaultText,
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

<style lang="scss" >
.nvw-prompt-dialog {
  &__message {
    margin-bottom: 20px;
  }
  &__input {
    width: 100%;
    box-sizing: border-box;
    padding: 4px 3px;
  }
  &__footer {
    display: flex;
    flex: 1;
    justify-content: space-between;

    &__cancel-button,
    &__ok-button {
      background-color: #ffffff;
      color: #364fc7;
      border: none;
      outline: none;
      font-size: 14px;
      font-weight: 600;
      padding: 8px 0;
      min-width: auto;
      text-transform: uppercase;

      &:hover {
        cursor: pointer;
      }
    }

    &__ok-button {
      margin-left: 20px;
    }
  }
}
</style>
