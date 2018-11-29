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
    Vue.prototype.$showModal = function(component, options = { context: null, fullscreen: false }) {
      // eslint-disable-line
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
    // Register action dialog to the window.
    window.action = async function(title, cancelButtonText, options) {
      const actionDialog = new ActionDialogComponent();
      const actionDialogDom = actionDialog.$mount().$el;
      document.body.appendChild(actionDialogDom);

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
    // Register alert dialog to the window.
    window.alert = function(messageText) {
      const alertDialog = new AlertDialogComponent();
      const alertDialogDom = alertDialog.$mount().$el;
      document.body.appendChild(alertDialogDom);

      return new Promise(resolve => {
        if (typeof messageText === 'string') {
          alertDialog.message = messageText;
        } else {
          const { title, message, okButtonText } = messageText;
          alertDialog.title = title;
          alertDialog.message = message;
          alertDialog.okButtonText = okButtonText;
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
    // Register login dialog to the window.
    window.login = async function(messageText, userName, password) {
      const loginDialog = new LoginDialogComponent();
      const loginDialogDom = loginDialog.$mount().$el;
      document.body.appendChild(loginDialogDom);

      return new Promise(resolve => {
        if (typeof messageText === 'string') {
          loginDialog.message = messageText;
          loginDialog.userName = userName;
          loginDialog.password = password;
        } else {
          const { title, message, okButtonText, cancelButtonText, userName, password } = messageText;
          loginDialog.title = title;
          loginDialog.message = message;
          loginDialog.okButtonText = okButtonText;
          loginDialog.cancelButtonText = cancelButtonText;
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
    // Register confirm dialog to the window.
    window.confirm = async function(messageText) {
      const confirmDialog = new ConfirmDialogComponent();
      const confirmDialogDom = confirmDialog.$mount().$el;
      document.body.appendChild(confirmDialogDom);

      return new Promise(resolve => {
        if (typeof messageText === 'string') {
          confirmDialog.message = messageText;
        } else {
          const { title, message, okButtonText, cancelButtonText } = messageText;
          confirmDialog.title = title;
          confirmDialog.message = message;
          confirmDialog.okButtonText = okButtonText;
          confirmDialog.cancelButtonText = cancelButtonText;
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
    // Register prompt dialog to the window.
    window.prompt = async function(messageText, defaultText) {
      const promptDialog = new PromptDialogComponent();
      const promptDialogDom = promptDialog.$mount().$el;
      document.body.appendChild(promptDialogDom);

      return new Promise(resolve => {
        if (typeof messageText === 'string') {
          promptDialog.message = messageText;
          promptDialog.defaultText = defaultText;
        } else {
          const { title, message, okButtonText, cancelButtonText, defaultText } = messageText;
          promptDialog.title = title;
          promptDialog.message = message;
          promptDialog.okButtonText = okButtonText;
          promptDialog.cancelButtonText = cancelButtonText;
          promptDialog.defaultText = defaultText;
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
