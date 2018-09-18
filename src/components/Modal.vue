<template>
  <transition v-if="isModalVisible" @close="closeModal" name="modal-fade">
    <div @click="closeModal" class="nvw-modal" :class="modalClass">
      <div
        @click.stop
        class="nvw-modal__backdrop"
        role="dialog"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription"
      >
      <section class="nvw-modal__body">
          <component :is="contentComponent" />
      </section>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Modal',
  data() {
    return {
      isModalVisible: false,
    };
  },
  props: {
    fullscreen: {
      type: Boolean,
      default: false,
    },
    contentComponent: {
      type: Object,
    },
  },
  methods: {
    closeModal() {
      this.isModalVisible = false;
    },
  },
  computed: {
    modalClass: function() {
      return `${this.fullscreen ? 'nvw-modal--fullscreen' : ''}`;
    },
  },
};
</script>

<style lang="scss" scoped>
.nvw-modal {
  position: fixed;
  top: 0;
  border-radius: 6px;
  background-color: rgba(0, 0, 0, 0.5);
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  &__backdrop {
    background: #ffffff;
    box-shadow: 1px 1px 10px 0px;
    overflow-x: auto;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
  }
  &--fullscreen {
    .nvw-modal__backdrop {
      width: 90%;
      height: 90%;
    }
  }
  &__body {
    position: relative;
    padding: 20px 15px;
  }
}

.modal-fade-enter,
.modal-fade-leave-active {
  opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.5s ease;
}
</style>
