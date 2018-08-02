# Spring Boot + Gradle + React + Webpack

This is a sample application to get started on using React with Spring Boot.

## Technologies
1. Spring Boot - https://start.spring.io
2. Gradle - https://gradle.org
3. ReactJS - https://reactjs.org
4. Webpack - https://webpack.js.org

### SpringBoot
Here, spring boot is acting as our backend which is serving the initial page and provides API's for other interactions.

### Gradle
Build tool for our app

### REACT JS
A JavaScript library for building user interfaces. React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.

### Webpack
At its core, webpack is a static module bundler for modern JavaScript applications. When webpack processes your application, it internally builds a dependency graph which maps every module your project needs and generates one or more bundles. It helps compile your javascript files (in this example react js files) into a bundle.js making sure most browsers are able to understand while still allowing engineers to code in latest ES syntax.

## Getting Started
Clone/Fork the repo and get started.

1. Go to your terminal and run the command `./gradlew npm_install` to get all node_modules set up.
2. To get the app up and running in dev mode to the following - 
    1. In one terminal, start the spring app to act as our backend - `./gradlew bootRun`.
    2. In another terminal window, let us start our front end in hot loader mode. We are using webpack-dev-server to help us with it. Run the command `./gradlew start`.
    3. Done. the terminal window will open a browser window pointing to http://localhost:3030/ and you will see a simple login page. Use admin/admin to get to the welcome page.
3. To run the react tests, execute `./gradlew check`
4. To compile the whole app into a single executable, run `./gradlew assemble`. This will bundle your react app into a single javascript file, create the index page with correct tag for bundled js, and copy these files to jar's static folder.
5. Once compiled run - `java -jar spring-app/build/libs/spring-react-0.0.1.jar` and you will have your app running on http://localhost:8080/.


## Working on - 
1. Dockerfile
2. Adding other webpack plugins
3. Making size of bundled file more smaller.


