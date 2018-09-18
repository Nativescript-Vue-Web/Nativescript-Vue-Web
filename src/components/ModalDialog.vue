<template>
  <transition name="modal-fade">
    <div @click="close" class="nvw-modal">
      <div 
        @click.stop
        class="nvw-modal__backdrop"
        role="dialog"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription"
      >
        <header
          class="nvw-modal__header"
          id="modalTitle"
        >
          <slot name="header">
          </slot>
        </header>
        <section class="nvw-modal__body" id="modalDescription">
          <slot name="body"> 
          </slot>
        </section>
        <footer class="nvw-modal__footer">
          <slot name="footer">
          </slot>
        </footer>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'ModalDialog',
  methods: {
    close() {
      this.$emit('close');
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
  &__header {
    padding: 24px;
    display: flex;
    border-bottom: 1px solid #eeeeee;
    width: 288px;
    height: 24px;
    font-size: 18px;
    color: black;
    justify-content: space-between;
  }
  &__body {
    position: relative;
    padding: 20px 15px;
  }
  &__footer {
    padding: 24px;
    display: flex;
    border-top: 1px solid #eeeeee;
    color: black;
    justify-content: flex-end;
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
