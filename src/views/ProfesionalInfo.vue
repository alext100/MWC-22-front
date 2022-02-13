<template>
  <h1>Tell us about your experience and knowledge</h1>
  <div class="container stack__form mx-auto">
    <div class="container form-container">
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

    <div class="container">
      <div class="container p-0 mt-5 ms-3">
        <h2>Sector:</h2>
        <div class="row">
          <div class="col-xl-12 col-lg-12 cards-container">
            <full-card
              v-for="sector in techSector || []"
              :key="sector"
              type="body"
              class="mb-1 mt-2 mb-xl-0 tag-card"
              bodyClasses="py-0"
              :shadow="true"
              shadowSize="md"
              :hover="true"
              ><div class="card-text">{{ sector }}</div>
            </full-card>
          </div>
        </div>
      </div>

      <div class="container p-0 mt-5 ms-3">
        <h2>Skills:</h2>
        <div class="row">
          <div class="col-xl-12 col-lg-12 cards-container">
            <full-card
              v-for="techSkill in techSkills || []"
              :key="techSkill"
              type="body"
              class="mb-1 mt-2 mb-xl-0 tag-card"
              bodyClasses="py-0"
              :shadow="true"
              shadowSize="md"
              :hover="true"
              ><div class="card-text">{{ techSkill }}</div>
            </full-card>
          </div>
        </div>
      </div>
    </div>
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
import FullCard from "../components/FullCard.vue";

export default defineComponent({
  name: "ProfesionalInfo",
  components: {
    TextInput,
    Form,
    Selector,
    VueSelect,
    FullCard,
  },
  setup() {
    const { state, dispatch } = useStore();
    const sectors = ref(["Front", "Back", "Mobile", "Data"]);
    const options = [
      {
        name: "Front",
        skills: [
          { name: "HTML" },
          { name: "CSS" },
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
  computed: {
    ...mapState(["techSector", "techSkills"]),
  },
  methods: {
    ...mapActions(["setProfesionalInfo"]),

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

<style lang="scss" scoped>
.tag-card {
  background-color: #effcff;
}
.form-container {
  padding: 0;
  margin: 10px auto 0px auto !important;
  padding-bottom: 60px;
}
.stack__form {
  display: flex;
  margin: 20px;
}
.stack__form .vue-select {
  width: 100%;
  margin-bottom: 24px;
}
.vue-tag {
  background-color: transparent;
}
form {
  padding: 20px;
  margin: 30px auto 0px auto !important;
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
@media (max-width: 700px) {
  .form-container {
    width: 600px;
  }
  .stack__form {
    display: block;
  }
}
@media (max-width: 500px) {
  .form-container {
    width: 400px;
  }
}
@media (max-width: 400px) {
  .form-container {
    width: 320px;
    min-width: 300px;
  }
}
</style>
