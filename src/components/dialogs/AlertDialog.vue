<template>
  <ModalDialog v-if="isModalVisible" class="nvw-alert-dialog" @close="close">
    <span class="nvw-alert-dialog__header" slot="header">{{ title }}</span>

    <div class="nvw-alert-dialog__body" slot="body">
      <div>{{ message }}</div>
    </div>

    <div class="nvw-alert-dialog__footer" slot="footer">
      <Button
        class="nvw-alert-dialog__footer__ok-button"
        :text="okButtonText"
        @tap="close"
        :link="true"
      />
    </div>
  </ModalDialog>
</template>

<script>
import Button from '../Button';
import ModalDialog from '../ModalDialog';

export default {
  name: 'AlertDialog',
  data() {
    return {
      isModalVisible: false,
    };
  },
  props: {
    title: {
      type: String,
      default: 'Alert',
    },
    message: String,
    okButtonText: {
      type: String,
      default: 'Ok',
    },
  },
  methods: {
    close(event) {
      this.isModalVisible = false;
      this.$emit('submit', event);
    },
  },
  components: {
    ModalDialog,
    Button,
  },
};
</script>

<style lang="scss" >
.nvw-alert-dialog {
  &__footer {
    &__ok-button {
      background-color: #ffffff;
      color: #364fc7;
      border: none;
      outline: none;
      font-size: 14px;
      font-weight: 600;
      padding: 8px 6px;
      text-transform: uppercase;

      &:hover {
        cursor: pointer;
      }
    }
  }
}
</style>
