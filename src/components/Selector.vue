<template>
  <vue-select multiple taggable> </vue-select>
</template>

<script>
import VueNextSelect from "vue-next-select";
import { defineComponent } from "vue";

export default defineComponent({
  name: "ResourceSelector",
  components: {
    "vue-select": VueNextSelect,
  },
  props: {},
});
</script>

<style>
.vue-tag {
  background-color: transparent !important;
  font-size: 16px !important;
}
.register__form .vue-select {
  width: 100%;
  margin-bottom: 24px;
}
.vue-select-header {
  background-color: #f2f5f7;
  border: 1px solid gray !important;
  border-radius: 5px;
  min-height: 58px;
  max-height: auto;
  font-weight: 600;
}
.vue-select-header.success input {
  background-color: var(--success-bg-color);
}
li .icon.delete {
  height: 18px;
  width: 18px;
  min-height: 15px;
  min-width: 15px;
  max-height: 20px;
  max-width: 20px;
}

span.icon.arrow-downward {
  border-width: 7px 7px 0px;
  margin-right: 10px !important;
}
li.vue-dropdown-item.selected {
  background-color: #b8b8b8bc;
}
li.vue-dropdown-item {
  padding: 4px;
  cursor: pointer;
  font-size: 18px;
  min-height: 2rem;
}
.vue-select-header .vue-input input {
  font-size: 1rem;
}
</style>
