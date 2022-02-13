<template>
  <div class="container register__form">
    <h1 class="m-2">Register a new account</h1>
    <Form
      class="shadow"
      @submit="handleCreate"
      :validation-schema="schema"
      @invalid-submit="onInvalidSubmit"
    >
      <TextInput
        :value="email"
        name="email"
        type="email"
        label="E-mail"
        placeholder="Email address"
        success-message="Thank you!"
      />
      <TextInput
        :value="firstName"
        name="firstName"
        type="text"
        label="First Name"
        placeholder="First Name"
        success-message="Thank you!"
      />
      <TextInput
        :value="lastName"
        name="lastName"
        type="text"
        label="Last Name"
        placeholder="Last Name"
        success-message="Thank you!"
      />

      <TextInput
        :value="country"
        name="country"
        type="text"
        label="Country"
        placeholder="Country"
        success-message="Thank you!"
      />
      <TextInput
        :value="city"
        name="city"
        type="text"
        label="City of residence"
        placeholder="City"
        success-message="Thank you!"
      />
      <Textarea
        :value="description"
        name="description"
        type="text"
        label="Short description"
        placeholder="Description (max 300 caracteres)"
        success-message="Thank you!"
      />

      <span v-if="isWrong" class="login__wrong">Wrong username or password! Try again!</span>
      <button class="submit-btn" type="submit">Sign Up</button>
    </Form>
  </div>
</template>

<script>
import { Form } from "vee-validate";
import * as Yup from "yup";
import TextInput from "@/components/TextInput.vue";
import { mapActions, mapState } from "vuex";
import Textarea from "../components/Textarea.vue";

export default {
  name: "Register",
  components: {
    TextInput,
    Form,
    Textarea,
  },
  setup() {
    function onInvalidSubmit() {
      const submitBtn = document.querySelector(".submit-btn");
      submitBtn.classList.add("invalid");
      setTimeout(() => {
        submitBtn.classList.remove("invalid");
      }, 1000);
    }

    const schema = Yup.object().shape({
      firstName: Yup.string().max(30).required(),
      lastName: Yup.string().max(30).required(),
      email: Yup.string().email().max(40).required(),
      city: Yup.string().max(30).required(),
      country: Yup.string().max(30).required(),
      description: Yup.string().max(300).required(),
    });

    return {
      schema,
      onInvalidSubmit,
    };
  },

  data() {
    return {
      userData: {
        firstName: null,
        lastName: null,
        email: null,
        country: null,
        city: null,
        description: null,
      },
      email: "",
      firstName: "",
      lastName: "",
      city: "",
      country: "",
      description: "",
      isWrong: false,
    };
  },
  methods: {
    ...mapActions(["registerUser"]),
    ...mapState(["isUserAuthenticated"]),

    handleCreate({ firstName, lastName, email, country, city, description }) {
      if (email !== "" && firstName !== "" && lastName !== "" && country !== "" && city !== "") {
        const userData = {
          firstName,
          lastName,
          email,
          country,
          city,
          description,
        };

        this.registerUser(userData);
        if (this.isUserAuthenticated) {
          this.$router.push("/profesional-info");
        }
      }
      this.email = "";
      this.firstName = "";
      this.lastName = "";
      this.country = "";
      this.city = "";
      this.description = "";
      this.isWrong = false;
    },
  },
};
</script>

<style lang="scss">
form {
  margin-top: 30px !important;
  padding: 20px;
  margin: 0px auto;
  padding-bottom: 60px;
  border-style: ridge;
  border-radius: 15px;
  background-color: #9db2b6;
}

.submit-btn,
.register-btn {
  background: var(--primary-color);
  outline: none;
  border: none;
  color: #fff;
  font-size: 18px;
  padding: 10px 15px;
  display: block;
  width: 100%;
  border-radius: 7px;
  margin-top: 40px;
  transition: transform 0.3s ease-in-out;
  cursor: pointer;
  text-decoration: none;
}

.register-btn {
  background: var(--success-color);
}

.submit-btn.invalid {
  animation: shake 0.5s;
  animation-iteration-count: infinite;
}
.login__wrong {
  color: var(--error-color);
  font-size: 15px;
  font-family: Noto Sans, Arial, sans-serif;
  font-weight: bold;
  margin-bottom: 10px;
}

@keyframes shake {
  0% {
    transform: translate(1px, 1px);
  }
  10% {
    transform: translate(-1px, -2px);
  }
  20% {
    transform: translate(-3px, 0px);
  }
  30% {
    transform: translate(3px, 2px);
  }
  40% {
    transform: translate(1px, -1px);
  }
  50% {
    transform: translate(-1px, 2px);
  }
  60% {
    transform: translate(-3px, 1px);
  }
  70% {
    transform: translate(3px, 1px);
  }
  80% {
    transform: translate(-1px, -1px);
  }
  90% {
    transform: translate(1px, 2px);
  }
  100% {
    transform: translate(1px, -2px);
  }
}

.submit-btn:hover,
.register-btn:hover {
  transform: scale(1.05);
}
@media (min-width: 700px) {
  form {
    max-width: 600px;
  }
}
@media (max-width: 500px) {
  form {
    width: 400px;
  }
}
@media (max-width: 400px) {
  form {
    width: 320px;
    min-width: 300px;
  }
}
</style>
