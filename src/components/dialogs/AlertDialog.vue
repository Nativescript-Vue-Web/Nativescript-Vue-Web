<template>
<ModalDialog v-if="isModalVisible" class="alert-dialog" @close="close">

    <span class="alert-dialog__header" slot="header">
        <h4>{{ title }}</h4>
    </span>

    <div class="alert-dialog__body" slot="body">
        <p>{{ message }}</p>
    </div>

    <div class="alert-dialog__footer" slot="footer">
        <Button class="btn-alert" :text="okButtonText" @tap="close" :link="true"/>
    </div>

</ModalDialog>
</template>

<script>
import { Button, ModalDialog } from '../../main';

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

<style lang="scss" scoped>
.nu-alert-dialog {
  &__footer {
    .btn-alert {
      background-color: #ffffff;
      color: #364fc7;
      &:hover {
        border: solid 1px #364fc7;
      }
    }
  }
}
</style>
