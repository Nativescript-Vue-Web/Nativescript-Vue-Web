<template>
  <ModalDialog v-if="isModalVisible" class="nvw-action-dialog" @close="close">
    <span class="nvw-action-dialog__header" slot="header">{{ title }}</span>

    <div class="nvw-action-dialog__body" slot="body">
      <ul>
        <li v-for="(option, index) in options" :key="index">
          <Button @tap="$emit('submit', option)" :text="option" :link="true"/>
        </li>
      </ul>
    </div>

    <div class="nvw-action-dialog__footer" slot="footer">
      <Button
        class="nvw-action-dialog__footer__cancel-button"
        :text="cancelButtonText"
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
  name: 'ActionDialog',
  data() {
    return {
      isModalVisible: false,
    };
  },
  props: {
    title: String,
    cancelButtonText: String,
    options: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    close() {
      this.isModalVisible = false;
      this.$emit('submit', this.cancelButtonText);
    },
  },
  components: {
    ModalDialog,
    Button,
  },
};
</script>

<style lang="scss">
@import '../../assets/styles/components/dialogs';

.nvw-action-dialog {
  &__body {
    ul {
      list-style-type: none;
      padding: 0;
      margin: 0;

      li {
        .nvw-button {
          width: 100%;
          text-align: left;
          background-color: #fff;
          border: none;
          outline: none;
          padding: 8px 6px;
          margin: 2px 0;

          &:hover {
            cursor: pointer;
            background-color: #ebebeb;
          }
        }
      }
    }
  }
  &__footer {
    &__cancel-button {
      @include nvw-dialog-button;
    }
  }
}
</style>
