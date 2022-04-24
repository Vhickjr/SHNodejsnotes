/*WEEK 1*/

// creating a react app
// mkdir sidehustle /* mkdir means create a directory*/
// cd sidehustle
// npx create-react-app lesson2 /* it's always better to create apps in small letter*/
//npm statrt starts the development server
// npm run build  bundles the app into static dvelopment
// I created a react app and deployed it to github
// first deploy your react app to github before adding the features you wan
// I made use of components by iportin thrm to the app.js


// steps to deploy your app to githb
// 1. npm git init
// 2. npm install gh-pages --save-dev
// 3. create a repository on your github
// git remote add origin https://github.com/myusername/my-app.git
// 4. add your homepage url to Package.Json
// ("homepage":'http://github_username/github.io/repo_name',)
// 5. add more scripts to your scripts in Package.Json
// ("predeoply": 'npm run deploy',)
// ("deploy": 'npm "gh-pages -d build")
// npm run deploy to deploy your site
// gh-pages helps publish your files on github


// EXTRAS
// (when you create a new repository on github, there are steps to follow even as a beginner)
// git push origin master is used to push your code to github


// consize way of pushing your code to Github for the first time
//1. cd my-app (my-app is react app name)
//2. ls (list all the files in my app)
//3. git init (Initialized empty Git repository)
//4.  git add . (adds all files ready for commit)
//5. git status (checks the status)
//6. git commit -m  "First Commit"
//7. git remote add origin  https://github.com/github_username/repo_name
//8. git push -u origin master (master is the branch name)
//9. if you want to create a new branch for update, use git checkout -b [branch name]


/* deploy when you have react router
1. npm  install gh-pages --save-dev
2. git remote add origin  https://github.com/github_username/repo_name
3. remember to change the browswer router to Hashrouter
4. add your homepage url to Package.Json
("homepage":'http://github_username/github.io/repo_name',)
5. add more scripts to your scripts in Package.Json
// ("predeoply": 'npm run build',)
// ("deploy": 'npm "gh-pages -d build")
6. npm run deploy to deploy your site (as well as every other timr you want to deploy)

/* CLONING
1. go to the repository you want to clone
2. click on the code button.
3. copy the link
4. go to your terminal and type "git clone <repo link>"
5. npm install


/* PULL REQUEST
/* MERGE
/*
/*WEEK 2*/
// we were given a capstone project, so much information to consume
// and, and more to it I'm the team leader for this project
// Important information/ notes
// A React component is responsible for rendering a small,
// reuasable piece of HTML

// A component is a combination of
// 1. Template using HTML
// 2. User interactivity using JSX
// 3 Styling using CSS
// Types of components
// 1. Functional components
// 2. Class-based components
// recall from last week, we created a react app;
// classbased component is a JavaScript class that extends React component
// functional component covert properties into HTML
//syntax
//A functional component is just a plain JavaScript function
// that accepts props as an argument and returns a React element
// A class component requires you to extend from React component
// and create a render function which return a React element
// Component and create a render function which returns a React element.
// There is no render method used in functional components.
// Other differencies (DYOR)
/* building resuable componenents with props */
/* what are props ? */
// props are one of the most important building blocks of reactjs
// When you need to pass data down from a parent component
// to a child component, props makes ir possible
// props helps you pass data from one component to another
// it makes it easy to create reusable items
// A parent componenent is a component that accepts other componenents
// props can pass down anything, no matter how small


/* React Routers */
// Routing is the ability to move between different parts when a user enters a url
// or clicks an element(link, button, icon, image etc) within the application
// React Router is the standard routing library for react
// To extend your application by adding routing capabilities,
// you will use the popular React-router library
// install by running the command below
// npm install --save react-router-dom


// A proper example
//types of router
// browser router
//routes
//links

/* STEP */
// The first thing to do is to use a router to wrap all the
// elements in a particular function
// push code to github





/* WEEK 3*/