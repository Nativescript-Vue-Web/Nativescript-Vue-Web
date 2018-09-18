<template>
    <ModalDialog v-if="isModalVisible" class="login-dialog" @close="close">
      <div class="login-dialog__header" slot="header">  
        <p>{{title}}</p>
      </div>
      <div class="login-dialog__body" slot="body">
        <div>
          {{message}}
        </div>
        <TextField class="login-dialog__body__username-input" v-model="uname" :hint="userName"  :editable="true" />
        <TextField class="login-dialog__body__password-input" v-model="pw" :hint="password"  :editable="true" :secure="true" />
      </div>
      <div class="login-dialog__footer" slot="footer">
        <Button class="login-dialog__footer__cancel-button" :text="cancelButtonText" @tap="close" />
        <Button class="login-dialog__footer__ok-button" :text="okButtonText" @tap="login" />
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
      uname: '',
      pw: '',
    };
  },
  props: {
    title: String,
    message: String,
    okButtonText: String,
    cancelButtonText: String,
    userName: String,
    password: String,
  },
  methods: {
    close: function() {
      this.$emit('submit', null);
      this.isModalVisible = false;
    },
    login: function() {
      this.$emit('submit', {
        userName: this.uname,
        password: this.pw,
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

<style lang="scss" scoped>
.login-dialog {
  &__body {
    &__username-input {
      display: block;
      margin-bottom: 5px;
    }
  }
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
