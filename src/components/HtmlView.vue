<template>
    <span :html="html" />
</template>

<script>
export default {
  name: 'HtmlView',
  props: {
    html: String,
  },
};
</script>
