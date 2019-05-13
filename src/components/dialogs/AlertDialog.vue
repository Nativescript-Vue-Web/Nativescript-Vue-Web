<template>
  <ModalDialog v-if="isModalVisible" class="nvw-alert-dialog" @close="close">
    <span class="nvw-alert-dialog__header" slot="header">{{ title }}</span>

    <div class="nvw-alert-dialog__body" slot="body">
      <div>{{ message }}</div>
    </div>

    <div class="nvw-alert-dialog__footer" slot="footer">
      <Button
        ref="okButton"
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
  mounted() {
    this.$nextTick(() => {
      this.$refs.okButton.$el.focus();
    });
  },
  components: {
    ModalDialog,
    Button,
  },
};
</script>

<style lang="scss" >
@import '../../assets/styles/components/dialogs';

.nvw-alert-dialog {
  &__footer {
    &__ok-button {
      @include nvw-dialog-button;
    }
  }
}
</style>
