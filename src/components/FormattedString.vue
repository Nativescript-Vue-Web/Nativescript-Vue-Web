<template>
    <div class="nvw-formattedstring">
        <slot></slot>
    </div>
</template>

<script>
export default {
  name: 'FormattedString',
  props: {
    editable: Boolean,
  },
};
</script>
