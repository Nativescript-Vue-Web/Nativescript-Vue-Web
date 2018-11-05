import LoginDialog from '../components/dialogs/LoginDialog';
import ActionDialog from '../components/dialogs/ActionDialog';
import AlertDialog from '../components/dialogs/AlertDialog';
import ConfirmDialog from '../components/dialogs/ConfirmDialog';
import PromptDialog from '../components/dialogs/PromptDialog';
import Modal from '../components/Modal';
import ViewDirective from '../directives/ViewDirective';

const NvwPlugin = {
  install: Vue => {
    // Show Modal
    Vue.prototype.$showModal = function(component, options = { context: null, fullscreen: false }) { // eslint-disable-line
      const ContentComponent = Vue.extend(component);
      const ModalComponent = Vue.extend(Modal);
      const ModalInstance = new ModalComponent();
      ContentComponent.prototype.$modal = {
        close() {
          ModalInstance.closeModal();
        },
      };
      const modalDom = ModalInstance.$mount();
      document.body.appendChild(modalDom.$el);
      ModalInstance.isModalVisible = true;
      ModalInstance.contentComponent = ContentComponent;
      if (options && options.fullscreen) {
        ModalInstance.fullscreen = options.fullscreen;
      }
    };

    // Action Dialog
    const ActionDialogComponent = Vue.extend(ActionDialog);
    const actionDialog = new ActionDialogComponent();
    const actionDialogDom = actionDialog.$mount().$el;
    document.body.appendChild(actionDialogDom);

    // Register action dialog to the window.
    window.action = async function(title, cancelButtonText, options) {
      return new Promise(resolve => {
        if (typeof title === 'object') {
          actionDialog.title = title.title;
          actionDialog.cancelButtonText = title.cancelButtonText || 'Cancel';
          actionDialog.options = title.options;
        } else {
          actionDialog.title = title;
          actionDialog.cancelButtonText = cancelButtonText || 'Cancel';
          actionDialog.options = options;
        }
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
        if (typeof title === 'object') {
          alertDialog.title = title.title;
          alertDialog.message = title.message;
          alertDialog.okButtonText = title.okButtonText || 'OK';
        } else {
          alertDialog.title = title;
          alertDialog.message = message;
          alertDialog.okButtonText = okButtonText || 'OK';
        }
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
    window.login = async function(title, message, okButtonText, cancelButtonText, userName, password) {
      return new Promise(resolve => {
        if (typeof title === 'object') {
          loginDialog.title = title.title;
          loginDialog.message = title.message;
          loginDialog.okButtonText = title.okButtonText || 'OK';
          loginDialog.cancelButtonText = title.cancelButtonText || 'Cancel';
          loginDialog.userName = title.userName;
          loginDialog.password = title.password;
        } else {
          loginDialog.title = title;
          loginDialog.message = message;
          loginDialog.okButtonText = okButtonText || 'OK';
          loginDialog.cancelButtonText = cancelButtonText || 'Cancel';
          loginDialog.userName = userName;
          loginDialog.password = password;
        }
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
        if (typeof title === 'object') {
          confirmDialog.title = title.title;
          confirmDialog.message = title.message;
          confirmDialog.okButtonText = title.okButtonText || 'OK';
          confirmDialog.cancelButtonText = title.cancelButtonText || 'Cancel';
        } else {
          confirmDialog.title = title;
          confirmDialog.message = message;
          confirmDialog.okButtonText = okButtonText || 'OK';
          confirmDialog.cancelButtonText = cancelButtonText || 'Cancel';
        }
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
        if (typeof title === 'object') {
          promptDialog.title = title.title;
          promptDialog.message = title.message;
          promptDialog.okButtonText = title.okButtonText || 'OK';
          promptDialog.cancelButtonText = title.cancelButtonText || 'Cancel';
          promptDialog.defaultText = title.defaultText;
          promptDialog.inputType = title.inputType;
          promptDialog.value = title.value;
        } else {
          promptDialog.title = title;
          promptDialog.message = message;
          promptDialog.okButtonText = okButtonText || 'OK';
          promptDialog.cancelButtonText = cancelButtonText || 'Cancel';
          promptDialog.defaultText = defaultText;
          promptDialog.inputType = inputType;
          promptDialog.value = value;
        }
        promptDialog.isModalVisible = true;
        promptDialog.$once('submit', val => {
          promptDialog.isModalVisible = false;
          resolve(val);
        });
      });
    };

    Vue.filter('fonticon', function(value) {
      return value + ' | fonticon';
    });

    Vue.directive('view', ViewDirective);
  },
};
export default NvwPlugin;
