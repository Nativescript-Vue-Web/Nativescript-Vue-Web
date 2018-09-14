import { LoginDialog, ActionDialog, AlertDialog } from '../../main';

const DialogPlugin = {
    install: (Vue, options) => { // eslint-disable-line

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
  },
};

export default DialogPlugin;
