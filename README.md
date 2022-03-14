# MWC 22 | front

User stories / Objetivos

✅ Task 1 → Formulario que permita introducir los siguientes datos: correo electrónico, nombre completo, breve descripción, país y ciudad de residencia.

- Components:
  - TextInput.vue
  - TextArea.vue
- View:
  - Register.vue
- For validation was used:
  - vee-validate
  - Yup schema
    - All fields are required
- When user click on 'Sing Up' it invoke **handleCreate** and action **registerUser**(userData), that save userData in _loalstorage_ and invoke mutation **setCurrentUserRegisterData**. That put to state currentUser, isUserAuthenticated = true. And redirect to "/profesional-info"

✅ Task 2 → Generar un avatar de la persona de forma aleatoria (puede ser utilizando una API, colores, etc)

- Function getAvatar in @/utils that make fetch to API https://eu.ui-avatars.com with registered user's firstName and lastName as a params. API givs the url of image with user initials.

✅ Task 3 → Formulario que permita introducir datos profesionales: años de experiencia, sector (Front, Back, Mobile o Data), skills: (se pueden añadir de forma libre)

- Components:
  - Form (from vee-validate)
  - TextInput.vue
  - Selector.vue
    - Use vue-next-select
  - FullCard.vue
    - BaseCard.vue (custom components, made with bootstrap)
- View:
  - ProfesionalInfo.vue

When user choose tech sectors with the select input, that shows as a tag in input field and as a tags (with FullCard component) near the form. The same with skills select input.  
 Just years of experience fild id required on that form.  
 On every select object with data save's in state

- Actions:
  - onUpdateSectorValue
  - onUpdateSkillsValue
- Mutations:
  - setTechSector
  - setTechSkills
- State:
  - techSector
  - techSkills

On click on 'Save' button ivoke method **handleSaveProfesionalInfo** with user info that invoke's action **setProfesionalInfo**(profesionalInfo), that save userData in _loalstorage_ and invoke mutation **setCurrentUserProfesionalData** that change in state currentUserProfesionalData

✅ Task 4 → Las skills salen en formato tag en alguna parte del perfil  
The same view ProfesionalInfo.vue renders card as a tags with:

- Components:
  - Fullcard.vue
- State:
  - techSkills
  - techSector

✅ Task 5 → Una vista que permita ver todo el perfil de user con los datos anteriores

- Components:
  - Fullcard.vue
- View:
  - Profile.vue

It just card made with full-card component that shows user personal info, avatar from API.
Other card shows user profesional info with cards for show sectros and skills.

-State:

- currentUser
- currentUserProfesionalData

---

Some components was tested with jest
  ![coverage](https://raw.githubusercontent.com/alext100/MWC-22-front/master/img/coverage.png)

![res1](https://user-images.githubusercontent.com/83639312/158173998-e4edf1a1-ae1e-4092-8a7b-b5f99a48a291.png)

![res2](https://user-images.githubusercontent.com/83639312/158174014-99dc522d-1a9e-4beb-b95e-49e74f1f1103.png)

![res3](https://user-images.githubusercontent.com/83639312/158174025-0e58309f-c2a6-42d6-af8f-982d27304d57.png)
