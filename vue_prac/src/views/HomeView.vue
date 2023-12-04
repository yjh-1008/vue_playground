<template>
  <div>
    <InputText
      :modelValue="formData.email"
      :errMessage="errs.email"
      @update:value="(val) => (formData.email = val)"
      @update:errs="(val) => (errs.email = val)"
      :schema="yup.string().required('필수값입니다.')"
    />
    <!-- <input type="text" v-model="formData.email" />
    <span>{{ errs.email }}</span> -->
    <input type="text" v-model="formData.password" />
    <span>{{ errs.password }}</span>
    <button @click="onSubmit">제출</button>
  </div>
</template>

<script setup>
import { ref } from "vue";
import InputText from "@/components/InputText.vue";
import { formObject } from "@/plugins/yup";
import * as yup from "yup";
const formData = ref({
  email: "",
  password: "",
});

const errs = ref({
  email: "",
  password: "",
});

// const formDataRefs = toRefs(formData);

const onSubmit = () => {
  console.log(formObject);
  formObject
    .validate(formData.value, { abortEarly: false })
    .then(() => {
      errs.value = {};
    })
    .catch((err) => {
      err.inner.forEach((error) => (errs.value[error.path] = error.message));
    });
};
</script>
