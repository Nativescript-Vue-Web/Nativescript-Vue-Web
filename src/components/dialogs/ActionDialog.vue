<template>
<ModalDialog v-if="isModalVisible" class="action-dialog" @close="close">

  <span class="action-dialog__header" slot="header">  
    <p>{{ title }}</p>
  </span>

    <div class="action-dialog__body" slot="body">
           <section>
               <nav>
              <ul>
                  <li v-for="(option, index) in options" :key="index">
                    <Button @tap="$emit('submit', option)" :text="option" :link="true"/>
                  </li>
              </ul>
               </nav>
           </section>
        </div>

    <div class="action-dialog__footer" slot="footer">
        <Button class="action-dialog__footer__cancel-button" :text="cancelButtonText" @tap="close" :link="true" />
    </div>

</ModalDialog>
</template>

<script>
import { Button, ModalDialog } from '../../main';

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
      this.$emit('submit', null);
    },
  },
  components: {
    ModalDialog,
    Button,
  },
};
</script>

<style lang="scss" scoped>
.action-dialog {
  &__body {
    section:after {
      display: table;
      clear: both;
    }
    nav ul {
      list-style-type: none;
      padding: 0;
    }
    nav li {
      text-align: left;
      margin-top: 15px;
    }
    a {
      display: block;
      text-decoration: none;
      color: black;
      &:hover {
        opacity: 0.6;
      }
    }
  }
  &__footer {
    &__cancel-button {
      background-color: #ffffff;
      color: #364fc7;
      font-size: 12px;
      &:hover {
        border: solid 1px #364fc7;
      }
    }
  }
}
</style>
