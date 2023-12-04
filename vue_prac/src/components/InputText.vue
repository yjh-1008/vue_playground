<template>
  <div>
    <input type="text" v-model="modelValue" @change="onChange" />
    <span>{{ errMessage }}</span>
  </div>
</template>

<script setup>
import { defineProps, defineEmits, computed, watch } from "vue";

const emtis = defineEmits(["update:value", "update:errs"]);
const props = defineProps({
  modelValue: String,
  errMessage: String,
  schema: Object,
});

const modelValue = computed({
  get: () => props.modelValue,
  set: (val) => emtis("update:value", val),
});

watch(
  () => props.modelValue,
  (c) => {
    props.schema
      .validate(c, props.schema)
      .then(() => emtis("update:errs", ""))
      .catch((err) => {
        emtis("update:errs", err.message);
        console.log(err.message);
      });
  },
  { immediate: true }
);

// const onChange = (e) => {
//   console.log("change");
//   props.schema
//     .validate(e, props.schema)
//     .then(() => emtis("update:errs", ""))
//     .catch((err) => {
//       emtis("update:errs", err.message);
//       console.log(err.message);
//     });
// };
</script>

<style scoped>
span {
  display: block;
  color: red;
}
</style>
