<img alt="Proffy" align="center" src="https://raw.githubusercontent.com/JoaoVSouto/proffy/master/frontend/public/proffy-banner.png" />

## 💻 Overview

**Proffy** is a platform which facilitates the connection between students and teachers.

In there you have the possibilities to register yourself as a **teacher**, giving your phone number, the subject to be taught and your available schedule or you can simply access as a **student** and get to connect to a teacher in your desired subject.

It was develop during the **NLW - Next Level Week #2** offered by [Rocketseat](https://rocketseat.com.br/) :rocket:.

## 🚀 Usage

This project is divided on three folders, each one representing one end:

1. Backend
2. Frontend
3. Mobile

💡You have to have the backend running to have a full experience on frontend and mobile.

#### Laying the groundwork

Running this project requires a few programs that have to be installed on your computer:

- [Node.js v12+](https://nodejs.org/en/)
- [Yarn package manager](https://yarnpkg.com/)
- [Git](https://git-scm.com/)

With everything set, simply run on your terminal:

```bash
# Clones the repo
$ git clone https://github.com/JoaoVSouto/proffy.git

# Changes directory to proffy's
$ cd proffy
```

#### 🎲 Running backend

```bash
# Changes directory to backend folder
$ cd backend

# Installs dependencies
$ yarn

# Creates database migrations
$ yarn knex:migrate

# Spins up the server on port 3333
$ yarn dev
```

<a href="https://insomnia.rest/run/?label=Proffy&uri=https%3A%2F%2Fraw.githubusercontent.com%2FJoaoVSouto%2Fproffy%2Fmaster%2Fbackend%2Finsomnia%2Fproffy_api_points.json" target="_blank"><img src="https://insomnia.rest/images/run.svg" alt="Run in Insomnia"></a>

#### 🧭 Running frontend

```bash
# Changes directory to frontend folder
$ cd frontend

# Installs dependencies
$ yarn

# Spins up the dev server on port 3000
$ yarn start
```

Otherwise you can use the deployed version as your frontend. Access it here [https://proffy-rose.vercel.app/](https://proffy-rose.vercel.app/).

#### 📱 Running mobile

```bash
# Changes directory to mobile folder
$ cd mobile

# Installs dependencies
$ yarn

# Spins up the expo dev tools
$ yarn start
```

Since this project uses [Expo](https://expo.io/) you can simply scan the QR code it gives you, on your phone or run an emulator.

## 🛠 Techs

The following technologies were used to build this project:

#### **Server** ([NodeJS](https://nodejs.org/en/) + [TypeScript](https://www.typescriptlang.org/))

- **[Express](https://expressjs.com/)**
- **[Express Async Errors](https://github.com/davidbanham/express-async-errors)**
- **[CORS](https://expressjs.com/en/resources/middleware/cors.html)**
- **[KnexJS](http://knexjs.org/)**
- **[SQLite](https://github.com/mapbox/node-sqlite3)**

#### **Frontend** ([React](https://reactjs.org/) + [TypeScript](https://www.typescriptlang.org/))

- **[React Router Dom](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom)**
- **[Axios](https://github.com/axios/axios)**
- **[Styled Components](https://styled-components.com/)**
- **[Styled Breakpoints](https://github.com/mg901/styled-breakpoints)**

#### **Mobile** ([React Native](http://www.reactnative.com/) + [TypeScript](https://www.typescriptlang.org/))

- **[Expo](https://expo.io/)**
- **[Expo Google Fonts](https://github.com/expo/google-fonts)**
- **[React Navigation](https://reactnavigation.org/)**
- **[DateTimePicker](https://github.com/react-native-community/datetimepicker)**
- **[Async Storage](https://github.com/react-native-community/async-storage)**
- **[Picker](https://github.com/react-native-community/react-native-picker)**
- **[Styled Components](https://styled-components.com/)**

#### Code linting and formatting

- **[ESLint](https://eslint.org/)**
- **[Airbnb JS Style Guide](https://github.com/airbnb/javascript)**
- **[Prettier](https://prettier.io/)**
- **[EditorConfig](https://editorconfig.org/)**

## :art: Layout

### 🧭 Frontend

**[Visualize directly on Figma](https://www.figma.com/file/GHGS126t7WYjnPZdRKChJF/Proffy-Web)**

The idea behind the CSS architecture was to construct everything mobile-first.

#### Landing screen

<img alt="Landing screen" align="center" src="https://raw.githubusercontent.com/JoaoVSouto/proffy/master/assets/frontend/landing.gif" />

#### Teacher and classes registry screen

<img alt="Landing screen" align="center" src="https://raw.githubusercontent.com/JoaoVSouto/proffy/master/assets/frontend/registry.gif" />

#### List teachers screen

<img alt="Landing screen" align="center" src="https://raw.githubusercontent.com/JoaoVSouto/proffy/master/assets/frontend/list.gif" />

### 📱 Mobile

**[Visualize directly on Figma](https://www.figma.com/file/e33KvgUpFdunXxJjHnK7CG/Proffy-Mobile)**

#### Splash and landing screens

<img alt="Splash and landing screens" align="center" src="https://raw.githubusercontent.com/JoaoVSouto/proffy/master/assets/mobile/landing.gif" />

#### Give classes screen

<img alt="Give classes screen" align="center" src="https://raw.githubusercontent.com/JoaoVSouto/proffy/master/assets/mobile/give-classes.gif" />

#### List teachers and favorite teachers screens

<img alt="List teachers and favorite teachers screens" align="center" src="https://raw.githubusercontent.com/JoaoVSouto/proffy/master/assets/mobile/list.gif" />

## :page_facing_up: License

This project is under the MIT license. See the [LICENSE](https://raw.githubusercontent.com/JoaoVSouto/proffy/master/LICENSE) for more information.

---

Carefully written by João Vítor Souto :ocean:
