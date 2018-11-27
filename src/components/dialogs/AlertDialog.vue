<template>
  <ModalDialog v-if="isModalVisible" class="nvw-alert-dialog" @close="close">
    <span class="nvw-alert-dialog__header" slot="header">
      <h4>{{ title }}</h4>
    </span>

    <div class="nvw-alert-dialog__body" slot="body">
      <p>{{ message }}</p>
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
    title: String,
    message: String,
    okButtonText: String,
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
      &:hover {
        border-style: solid;
        border-color: #364fc7;
      }
    }
  }
}
</style>
