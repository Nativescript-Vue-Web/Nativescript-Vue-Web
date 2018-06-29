<template>
  <select :model="selectedIndex">
    <option 
      :value="disabledVal" 
      disabled>{{ disabledVal }}</option>
    <option 
      v-for="item in items" 
      :key="item[valueProp]" 
      :value="selectedIndex">
      {{ item[labelProp] }}
    </option>
  </select>
</template>

<script>

export default {
    name: "ListPicker",
    props: [
        "disabledVal", // Works only in web.
        "items",
        "value",
        "valueProp",
        "labelProp",
        "selectedIndex",
        "selectedIndexChange", // an event.
    ],
};
</script>

<style lang="scss" scoped>

</style>

