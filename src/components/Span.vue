<template>
    <span class="nvw-span">
        {{text}}
        <slot />
    </span>
</template>

<script>
export default {
  name: 'Span',
  props: {
    text: String,
  },
};
</script>
