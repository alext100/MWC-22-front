<template>
  <div class="container register__form">
    <h1>Tell us about your experience and knowledge</h1>
    <Form
      class="shadow"
      @submit="handleSaveProfesionalInfo"
      :validation-schema="schema"
      @invalid-submit="onInvalidSubmit"
    >
      <TextInput
        :value="experience"
        name="experience"
        type="number"
        label="Years of experience"
        placeholder="Years"
        success-message="Thank you!"
      />

      <label for="techSector">Choose your sector</label>
      <Selector
        name="techSector"
        :value="techSector"
        :options="sectors"
        placeholder="Sector:"
        :model-value="state.techSector"
        @update:modelValue="onUpdateSectorValue"
        success-message="Thank you!"
      />
      <label for="techSkills">Choose your skills</label>
      <vue-select
        name="techSkills"
        placeholder="Skills:"
        :options="skills"
        multiple
        taggable
        group-by="isConstructor"
        label-by="label"
        :model-value="state.techSkills"
        @update:modelValue="onUpdateSkillsValue"
        value-by="value"
      >
        <template #dropdown-item="{ option }">
          <template v-if="option.isConstructor">
            <div style="font-weight: 700">{{ option.label }}</div>
          </template>
          <template v-else>
            <div style="color: #550685">{{ option.label }}</div>
          </template>
        </template>
      </vue-select>

      <button class="submit-btn" type="submit">Save</button>
    </Form>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";

import { Form } from "vee-validate";
import * as Yup from "yup";
import TextInput from "@/components/TextInput.vue";
import { mapActions, mapState, useStore } from "vuex";
import VueSelect from "vue-next-select";
import Selector from "../components/Selector.vue";

export default defineComponent({
  name: "ProfesionalInfo",
  components: {
    TextInput,
    Form,
    Selector,
    VueSelect,
  },
  setup() {
    const { state, dispatch } = useStore();
    const { techSector } = state;
    const sectors = ref(["Front", "Back", "Mobile", "Data"]);
    const options = [
      {
        name: "Front",
        skills: [
          { name: "HTML (Hypertext Markup Language)" },
          { name: "CSS (Cascading Style Sheets)" },
          { name: "JavaScript" },
          { name: "Angular.js" },
          { name: "React.js" },
          { name: "Vue.js" },
          { name: "SCSS" },
          { name: "SASS" },
          { name: "LESS" },
        ],
      },
      {
        name: "Back",
        skills: [
          { name: "MongoDB" },
          { name: "Express.js" },
          { name: "Node.js" },
          { name: "MySQL" },
          { name: "Apache" },
          { name: "PHP" },
        ],
      },
      {
        name: "Mobile",
        skills: [
          { name: "Kotlin" },
          { name: "Java" },
          { name: "Android Developer Tools (ADT)" },
          { name: "Flutter" },
          { name: "React Native" },
          { name: "Swift" },
          { name: "SQLite" },
        ],
      },
      {
        name: "Data",
        skills: [
          { name: "Python" },
          { name: "SQL" },
          { name: "R" },
          { name: "Scala" },
          { name: "dplyr" },
          { name: "Spark" },
          { name: "PostgreSQL" },
          { name: "tidyr" },
        ],
      },
    ];

    const selectedSectors = state.techSector;

    const skills = ref(
      options.reduce(
        (flat, constructor) =>
          flat
            .concat({
              label: constructor.name,
              value: constructor.skills.map((skill) => skill.name),
              isConstructor: true,
            })
            .concat(constructor.skills.map((skill) => ({ label: skill.name, value: skill.name }))),
        []
      )
    );

    async function onUpdateSectorValue(value) {
      await dispatch("setTechSector", value);
    }

    function onUpdateSkillsValue(value) {
      dispatch("setTechSkills", value);
    }

    function onInvalidSubmit() {
      const submitBtn = document.querySelector(".submit-btn");
      submitBtn.classList.add("invalid");
      setTimeout(() => {
        submitBtn.classList.remove("invalid");
      }, 1000);
    }

    const schema = Yup.object().shape({
      experience: Yup.number().min(0).max(50).required(),
    });

    return {
      state,
      schema,
      sectors,
      skills,
      techSector,
      selectedSectors,
      onInvalidSubmit,
      onUpdateSectorValue,
      onUpdateSkillsValue,
    };
  },

  data() {
    return {
      profesionalInfo: {
        experience: null,
        techSector: null,
        techSkills: null,
      },
      experience: "",
    };
  },
  methods: {
    ...mapActions(["setProfesionalInfo"]),
    ...mapState(["techSector", "techSkills"]),

    handleSaveProfesionalInfo({ experience }) {
      const profesionalInfo = {
        techSector: this.state.techSector,
        techSkills: this.state.techSkills,
        experience,
      };

      this.setProfesionalInfo(profesionalInfo);
      if (this.state.profesionalInfo !== {}) {
        this.$router.push("/profile");
      }
      this.experience = "";
    },
  },
});
</script>

<style lang="scss">
.vue-tag {
  background-color: transparent;
}
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
