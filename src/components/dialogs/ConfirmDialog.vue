<template>
<ModalDialog v-if="isModalVisible" class="nu-confirm-dialog" @close="close(false)">
    <span class="nu-confirm-dialog__header" slot="header">  
         <h4>{{ title }}</h4>
    </span>
    
    <div class="nu-confirm-dialog__body" slot="body">
            <p>{{ message }}</p>
     </div>

    <div class="nu-confirm-dialog__footer" slot="footer">
        <Button class="btn btn-cancel" :text="cancelButtonText" @tap="close(false)" />
        <Button class="btn btn-ok" :text="okButtonText" @tap="close(true)" /> 
      </div>     

</ModalDialog> 

</template>

<script>
import { ModalDialog, Button } from '../../main';

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
.nu-confirm-dialog {
  &__footer {
    .btn {
      width: 96px;
      margin: 0 5px;
    }
    .btn-ok {
      background-color: #ffffff;
      color: #364fc7;
      &:hover {
        border: solid 1px #364fc7;
      }
    }
    .btn-cancel {
      background-color: #ffffff;
      color: #364fc7;
      &:hover {
        border: solid 1px #364fc7;
      }
    }
  }
}
</style>
