import { LoginDialog, ActionDialog, AlertDialog, ConfirmDialog, PromptDialog } from '../../main';

const DialogPlugin = {
  install: Vue => {
    // Action Dialog
    const ActionDialogComponent = Vue.extend(ActionDialog);
    const actionDialog = new ActionDialogComponent();
    const actionDialogDom = actionDialog.$mount().$el;
    document.body.appendChild(actionDialogDom);

    // Register action dialog to the window.
    window.action = async function(title, cancelButtonText, options) {
      return new Promise(resolve => {
        actionDialog.title = title;
        actionDialog.cancelButtonText = cancelButtonText;
        actionDialog.options = options;
        actionDialog.isModalVisible = true;
        actionDialog.$once('submit', value => {
          actionDialog.isModalVisible = false;
          resolve(value);
        });
      });
    };

    // Alert Dialog
    const AlertDialogComponent = Vue.extend(AlertDialog);
    const alertDialog = new AlertDialogComponent();
    const alertDialogDom = alertDialog.$mount().$el;
    document.body.appendChild(alertDialogDom);

    // Register alert dialog to the window.
    window.alert = function(title, message, okButtonText) {
      return new Promise(resolve => {
        alertDialog.title = title;
        alertDialog.message = message;
        alertDialog.okButtonText = okButtonText;
        alertDialog.isModalVisible = true;
        alertDialog.$once('submit', $event => {
          alertDialog.isModalVisible = false;
          resolve($event);
        });
      });
    };

    // Login Dialog
    const LoginDialogComponent = Vue.extend(LoginDialog);
    const loginDialog = new LoginDialogComponent();
    const loginDialogDom = loginDialog.$mount().$el;
    document.body.appendChild(loginDialogDom);

    // Register login dialog to the window.
    window.login = async function({ title, message, okButtonText, cancelButtonText, userName, password }) {
      return new Promise(resolve => {
        loginDialog.title = title;
        loginDialog.message = message;
        loginDialog.okButtonText = okButtonText;
        loginDialog.cancelButtonText = cancelButtonText;
        loginDialog.userName = userName;
        loginDialog.password = password;
        loginDialog.isModalVisible = true;
        loginDialog.$once('submit', value => {
          loginDialog.isModalVisible = false;
          resolve(value);
        });
      });
    };

    // Confirm Dialog
    const ConfirmDialogComponent = Vue.extend(ConfirmDialog);
    const confirmDialog = new ConfirmDialogComponent();
    const confirmDialogDom = confirmDialog.$mount().$el;
    document.body.appendChild(confirmDialogDom);

    // Register confirm dialog to the window.
    window.confirm = async function(title, message, okButtonText, cancelButtonText) {
      return new Promise(resolve => {
        confirmDialog.title = title;
        confirmDialog.message = message;
        confirmDialog.okButtonText = okButtonText;
        confirmDialog.cancelButtonText = cancelButtonText;
        confirmDialog.isModalVisible = true;
        confirmDialog.$once('submit', val => {
          confirmDialog.isModalVisible = false;
          resolve(val);
        });
      });
    };

    // Prompt Dialog
    const PromptDialogComponent = Vue.extend(PromptDialog);
    const promptDialog = new PromptDialogComponent();
    const promptDialogDom = promptDialog.$mount().$el;
    document.body.appendChild(promptDialogDom);

    // Register prompt dialog to the window.
    window.prompt = async function(title, message, okButtonText, cancelButtonText, defaultText, inputType, value) {
      return new Promise(resolve => {
        promptDialog.title = title;
        promptDialog.message = message;
        promptDialog.okButtonText = okButtonText;
        promptDialog.cancelButtonText = cancelButtonText;
        promptDialog.defaultText = defaultText;
        promptDialog.inputType = inputType;
        promptDialog.value = value;
        promptDialog.isModalVisible = true;
        promptDialog.$once('submit', val => {
          promptDialog.isModalVisible = false;
          resolve(val);
        });
      });
    };
  },
};
export default DialogPlugin;
