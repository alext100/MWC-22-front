<template>
  <div class="textInput" :class="{ 'has-error': !!errorMessage, success: meta.valid }">
    <label :for="name">{{ label }}</label>
    <textarea
      :name="name"
      :id="name"
      :type="type"
      :value="inputValue"
      :placeholder="placeholder"
      @input="handleChange"
      @blur="handleBlur"
    />

    <p class="help-message" v-show="errorMessage || meta.valid">
      {{ errorMessage || successMessage }}
    </p>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { useField } from "vee-validate";

export default defineComponent({
  props: {
    type: {
      type: String,
      default: "text",
    },
    value: {
      type: String,
      default: "",
    },
    name: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    successMessage: {
      type: String,
      default: "",
    },
    placeholder: {
      type: String,
      default: "",
    },
  },
  setup(props) {
    const {
      value: inputValue,
      errorMessage,
      handleBlur,
      handleChange,
      meta,
    } = useField(props.name, undefined, {
      initialValue: props.value,
    });

    return {
      handleChange,
      handleBlur,
      errorMessage,
      inputValue,
      meta,
    };
  },
});
</script>

<style lang="scss">
.textInput {
  position: relative;
  margin-bottom: calc(1em * 1.5);
  width: 100%;
  border-radius: 5px;
}

label {
  display: block;
  background-color: #9db2b6;
  margin-bottom: 4px;
  width: 100%;
}

textarea {
  border-radius: 5px;
  border: 2px solid transparent;
  padding: 15px 10px;
  outline: none;
  background-color: #f2f5f7;
  width: 100%;
  transition: border-color 0.3s ease-in-out, color 0.3s ease-in-out,
    background-color 0.3s ease-in-out;
}

textarea:focus {
  border-color: var(--primary-color);
}

.help-message {
  position: absolute;
  bottom: calc(-1.5 * 1em);
  left: 0;
  margin: 0;
  font-size: 14px;
  background-color: #9db2b6;
}

.textInput.has-error input {
  background-color: var(--error-bg-color);
  color: var(--error-color);
}

.textInput.has-error input:focus {
  border-color: var(--error-color);
}

.textInput.has-error .help-message {
  color: var(--error-color);
}

.textInput.success input {
  background-color: var(--success-bg-color);
  color: var(--success-color);
}

.textInput.success input:focus {
  border-color: var(--success-color);
}

.textInput.success .help-message {
  color: var(--success-color);
}
</style>
