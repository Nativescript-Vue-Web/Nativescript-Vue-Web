<template>
  <ModalDialog v-if="isModalVisible" class="nvw-login-dialog" @close="close">
    <span class="nvw-login-dialog__header" slot="header">{{title}}</span>
    <div class="nvw-login-dialog__body" slot="body">
      <div class="nvw-login-dialog__body__message">{{message}}</div>
      <TextField class="nvw-login-dialog__body__username-input" v-model="userName" hint="Username" :editable="true"/>
      <TextField
        class="nvw-login-dialog__body__password-input"
        v-model="password"
        hint="Password"
        :editable="true"
        :secure="true"
      />
    </div>
    <div class="nvw-login-dialog__footer" slot="footer">
      <Button
        class="nvw-login-dialog__footer__cancel-button"
        :text="cancelButtonText"
        @tap="close"
      />
      <Button class="nvw-login-dialog__footer__ok-button" :text="okButtonText" @tap="login"/>
    </div>
  </ModalDialog>
</template>

<script>
import Button from '../Button';
import ModalDialog from '../ModalDialog';
import TextField from '../TextField';

export default {
  name: 'LoginDialog',
  data() {
    return {
      isModalVisible: false,
    };
  },
  props: {
    title: {
      type: String,
      default: 'Login',
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
    userName: String,
    password: String,
  },
  methods: {
    close: function() {
      this.$emit('submit', {
        result: false,
        userName: this.userName,
        password: this.password,
      });
      this.isModalVisible = false;
    },
    login: function() {
      this.$emit('submit', {
        result: true,
        userName: this.userName,
        password: this.password,
      });
      this.isModalVisible = false;
    },
  },
  components: {
    ModalDialog,
    TextField,
    Button,
  },
};
</script>

<style lang="scss" >
@import '../../assets/styles/components/dialogs';

.nvw-login-dialog {
  &__body {
    &__message {
      margin-bottom: 15px;
    }
    &__username-input {
      display: block;
      margin-bottom: 5px;
    }

    &__username-input,
    &__password-input {
      width: 100%;
      box-sizing: border-box;
      padding: 4px 3px;
    }
  }
  &__footer {
    display: flex;
    flex: 1;
    justify-content: space-between;

    &__cancel-button,
    &__ok-button {
      @include nvw-dialog-button;
    }

    &__ok-button {
      margin-left: 20px;
    }
  }
}
</style>
