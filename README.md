# Helios Worldwide / Technical Assesment 🚀

Hi, I'm Deiber Verano!

This is my approach for this technical assesment wich consists following a figma desing given, Implement [Quiz API](https://quizapi.io/predefined-quizzes/javascript-essentials-everybody-should-know) and in general, setup a full project with Typescript, Tailwind CSS and React with Vite.

To build up the project you can:

    npm install
    npm run build
    npm preview

So... Let's see how do I solve this problem!

## Libraries

- [React-Router](https://reactrouter.com/)
- [axios](https://axios-http.com/docs/intro)

### Extra libraries.

I decided to use some extra libraries in order to develop a simplier and scalable code. Let me explain this extra libraries and why I used them.

- [Tanstack Query](https://tanstack.com/query/latest/docs/framework/react/overview): I decided to use this library because it provides easy ways to fetch and do some caching in the data of the API requested, I implemented some strategies with this library that will be explained later.
- [Zustand](https://zustand.docs.pmnd.rs/getting-started/introduction): This is my current favorite state managment library so I decided to used it, Also I think this library is perfect for the project. I need some specific structure that Context API maybe can't provide to it as easy as Zustand does and I don't need a very large structure so I don't need Redux at all.
- [CLSX](https://www.npmjs.com/package/clsx): Just a utility to have better code with conditional styles.

## Project Structure.

I use a project structure that separates the project logic models and the React implementation, So taking this the project is separated in two big folders:

### Core Folder

Contains all the API's setup, interfaces, repositories and implementations. This folder should be agnostic of all the other libraries used in project.

- **"axios" folder**: centralices all the axios setup and contains the creation of the main instance used in all project.

- **"quiz-api" folder**: contains the **interfaces** folder that contains the models of the API responses and the repository which is the model of what actions the app can perform with the API. Also has the **implementation** folder which contains the real implementation of the methods in repository model.

### App

The React App which uses the Core to communicate with external services.

- **"store" folder**: Contains the unique store in the app. This store handles the theme and the answers of the user in quiz. This store is persisted using the zustand persist middleware to save the data in localstorage.
- **"providers" folder**: Contains the providers (Tanstack query, React-Router) setup.
- **"components" folder**: Components used in all app like SVG's tranformed into React Components.
- **"pages" folder**: Contains the different pages required in the app. Each page contains routes, custom hooks and components.

## Additional Setups

- **Path aliases**: Setup to use path aliases importations in vite.config and tsconfig.
- **Tailwind Custom Colors**: Setup for theme colors in the tailwind colors.

## Additional Comments

I used Tanstack query persist plugin to achieve having all the questions saved in the user localstorage. This to save user progress without changing questions. Also I setup the questions request to be cached "Infinity" so this request only will be performed when user finished the quiz and click the play again button. The Zustand store persisted helps me too to achieve this user progress saving which improves the user UX.

I used the View transitions API implemented in react-router for the welcome -> questions navigation.

Finally for the conditionally styled componets I used the useMemo hook to handle that styles changing to prevent unnecessary renders or calculations,
The design doesn't have mobile designs so I develop the mobile version as the best I considered was possible taking into account provide the best UX.

Thank you for read all my explanation any doubt please contact me ✨!
