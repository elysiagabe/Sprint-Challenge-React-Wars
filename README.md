# Sprint Challenge: React - Star Wars

This challenge allows you to practice the concepts and techniques learned over the past Sprint and apply them in a concrete project. This Sprint explored ReactJS, Function Components, component state and side effects. In your challenge for this Sprint, you will demonstrate proficiency by creating an application that uses ReactJS to consume live data retrieved from the World Wide Web and style that data nicely on the page.

## Instructions

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This is an individual assessment. All work must be your own. Your challenge score is a measure of your ability to work independently using the material covered through this sprint. You need to demonstrate proficiency in the concepts and objectives introduced and practiced in preceding days.

You are not allowed to collaborate during the Sprint Challenge. However, you are encouraged to follow the twenty-minute rule and seek support from your PM and Instructor in your cohort help channel on Slack. Your work reflects your proficiency with ReactJS Fundamentals and your command of the concepts and techniques in the Functional Components.

You have three hours to complete this challenge. Plan your time accordingly.

## Commits

Commit your code regularly and meaningfully. This helps both you (in case you ever need to return to old code for any number of reasons and your Team Lead.

## Description

In this challenge, create a web page that presents a styled list of Star Wars characters. Being able to render out data to a web page is a large part of what JavaScript developers do, this challenge assesses your ability to achieve such a task.

## Self-Study/Essay Questions

Demonstrate your understanding of this Sprint's concepts by answering the following free-form questions. Edit this document to include your answers after each question. Make sure to leave a blank line above and below your answer so it is clear and easy to read by your Team Lead.

- [ ] What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

  React JS is a user interface component library developed by the team at Facebook to help solve some of the problems they were facing building large web apps and dealing with complex state. It helps solve some of the following issues: 
  - React JS renders components via the Virtual DOM instead of the actual DOM. This allows you to manage lots of data and complex state without bogging down the DOM or browser. 
  - In React JS, everything is a component. This makes your code very scalable and reusable. Plus, it helps with debugging, working with a team of other developers, etc. 
  - React JS doesn’t make assumptions about your tech stack and is un-opinionated about how you manage your data. Because it’s more flexible, you can choose what other tools, languages, libraries, etc. you want to use in your tech stack. 
  - React is declarative, making it easier to write, design and debug. 
  - React JS makes it easy to manage each component’s state and re-render a component when that state changes. This is great for web apps that, like Facebook, manage huge amounts of data that should change when users interact with them. 


- [ ] What does it mean to _think_ in react?

  I’m not entirely sure, but according to the React documentation, it means that you need to go through a certain thought process when building apps in React. The thought process should be something like this: 

  1. Start with a UI mockup 
  2. Break UI into a UI hierarchy
      - One technique to do so is the single responsibility principle, i.e., a component should ideally do one thing
  3. Build a static version in React
      - Render UI without functionality
      - Don’t introduce state yet
      - Build top-down or bottom-up
  4. Identify The Minimal (but complete) Representation Of UI State
      - Figure out the least amount of mutable state your app needs...Remember: DRY!
  5. Identify where your state should live
      - Find which components will render something based on that state, then find a common owner component to hold state
  6. Add inverse data flow	
      - Figure out how to update state back up the component hierarchy to reflect user interactions 


- [ ] Describe state.

  State can be defined as the current data being displayed or condition/status of an app. It can and will often change value at a certain point, typically based on user interactions. In React, you can add state with the useState hook, which returns an array with 2 elements: the current value of the state and the state setter function. When a component’s state is set to a new value, the component will re-render. 

- [ ] Describe props.

  Props (aka properties) is a JavaScript object that holds info on state and is used to pass state or other data from one component to another. Props are read only and can’t be changed. They allow us to break apps into smaller components, which as mentioned in the first question can really help with certain challenges like debugging and working as part of a larger team. Props are similar to arguments in JavaScript functions. 

- [ ] What are side effects, and how do you sync effects in a React component to state or prop changes?

  Side effects are anything that affects something outside the scope of the function being executed. In a React component function, the primary purpose of that function is to return a component and render it on screen. Things like fetching data from an API, manually manipulating the DOM or setting up a subscription would all be considered side effects. Side effects can cause a component to return a different output for the same state and props, so you’ll need to manage them in some way to avoid any inconsistencies or bugs. Side effects like fetching data could also create some blocking code and prevent a component from rendering until the API call is finished, which may take more time than desired. 
  
  One way to manage side effects is with the useEffect hook, which takes 2 parameters: a callback function and a (technically optional) dependency array. The callback is the code that will run after the render is committed to the screen, and the dependency array watches for change to any state or props specified. If a change happens to the synced state or props, React will re-invoke the effect and re-render. 

## Project Set Up

Follow these steps to set up and work on your project:

- [ ] Create a forked copy of this project.
- [ ] Add TL as collaborator on Github.
- [ ] Clone your OWN version of Repo. **(Not Lambda's by mistake!)**
- [ ] Create a new Branch locally: `git checkout -b <firstName-lastName>`.
- [ ] Change directories into `./starwars` (`cd starwars`) and run `yarn install` or `npm install` to retrieve all needed dependencies.
- [ ] Once you have installed the _node_modules_, run `yarn start` or `npm start` to get your server up and running.
- [ ] With the server up and running, open Chrome and head over to `localhost:3000` and view your beautiful app. Maybe it's not _that_ pretty... _yet_, your goal is to ensure this project becomes a thing of beauty.
Follow these steps for completing your project.
- [ ] Implement the project on this Branch, **committing progress & changes often.**
- [ ] Push commits: `git push origin <firstName-lastName>`.

Follow these steps for completing your project:

- [ ] Submit a Pull-Request to merge <firstName-lastName> Branch into master (student's  Repo).
- [ ] Add your Project Manager as a Reviewer on the Pull-request.
- [ ] TL then will count the HW as done by merging the branch back into master.


## Minimum Viable Product

Your finished project must include all of the following requirements:

- [ ] Fetch a list of Star Wars characters from the [Star Wars API (or SWAPI)](https://swapi.co/) and render them to the screen. 
- [ ] Follow the documentation to learn how to fetch a list of "people". However, don't spend _too_ long on this. Here is a link for you to follow if you've looked around the docs for about 15 minutes or so and haven't found where to go - [Secret Link to Awesomeness 🤫](https://swapi.co/documentation#people).
- [ ] Set the data you fetch to state.
- [ ] Map over the list and render a component for each character on the page.
- [ ] You must display at least one element for each star wars character in the data set.
- [ ] The elements must be styled with either Reactstrap or styled-components - don't rely on browser default styles.

#### Required best practices:

- [ ] Consistent naming. Examples: variables, functions, Components, and file/folder organization.
- [ ] Consistent spacing. Examples: line breaks, around arguments and before/after functions.
- [ ] Consistent quotation usage.
- [ ] Spell-check.
- [ ] Schedule time to review, refine and reassess your work.


It is better to submit a challenge that meets [MVP](https://en.wikipedia.org/wiki/Minimum_viable_product) than one that attempts too much and fails.

## Stretch Problems
- [ ] Next week we will be looking at React forms. Look a head and try to create a search form that will filter through the data displayed from your characters. 

- [ ] Build a pagination system that will allow you to load the next page of data.
  - `console.log()` the data coming back from the server.
  - Notice that there are `next` and `previous` fields that give you a URL.
  - You can build a function that will get characters called `getCharacters` that you can use dynamically to get the next or previous set of characters. You would need to supply it with the proper fields, and you'll need to set up more state to do this.

<!--
- [ ] Build another app from scratch that looks very similar to this one. Inside of your main `App` component fetch some data in this same fashion from this url `https://dog.ceo/dog-api/#all` you'll have to follow the documentation at that website and figure out how to change up the code you've seen here in this Star Wars app in order to properly fetch the data and store it on Component State.
-->
