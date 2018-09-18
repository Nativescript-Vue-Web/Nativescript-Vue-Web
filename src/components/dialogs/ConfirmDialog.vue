<template>
<ModalDialog v-if="isModalVisible" class="nvw-confirm-dialog" @close="close(false)">
    <span class="nvw-confirm-dialog__header" slot="header">  
         <h4>{{ title }}</h4>
    </span>
    
    <div v-if="message" class="nvw-confirm-dialog__body" slot="body">
      <p>{{ message }}</p>
     </div>

    <div class="nvw-confirm-dialog__footer" slot="footer">
        <Button class="nvw-confirm-dialog__footer__cancel-button" :text="cancelButtonText" @tap="close(false)" />
        <Button class="nvw-confirm-dialog__footer__ok-button" :text="okButtonText" @tap="close(true)" /> 
      </div>     

</ModalDialog> 

</template>

<script>
import Button from '../Button';
import ModalDialog from '../ModalDialog';

export default {
  name: 'ConfirmDialog',
  data() {
    return {
      isModalVisible: false,
    };
  },
  props: {
    title: String,
    message: String,
    okButtonText: String,
    cancelButtonText: String,
  },
  methods: {
    close(val) {
      this.isModalVisible = false;
      this.$emit('submit', val);
    },
  },
  components: {
    ModalDialog,
    Button,
  },
};
</script>

<style lang="scss" scoped>
.nvw-confirm-dialog {
  &__footer {
    &__cancel-button {
      background-color: #ffffff;
      color: #364fc7;
      width: 96px;
      margin: 0 5px;
      &:hover {
        border: solid 1px #364fc7;
      }
    }
    &__ok-button {
      background-color: #ffffff;
      color: #364fc7;
      width: 96px;
      margin: 0 5px;
      &:hover {
        border: solid 1px #364fc7;
      }
    }
  }
}
</style>
