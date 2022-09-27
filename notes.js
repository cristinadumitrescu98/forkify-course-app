/* 
//////////////////////////////////////////////////////////////////////
// Project Overview and Project Planning (I)
1. User Stories
    a. search for recipes 
    b. be able to update the number of servings
    c. bookmark recipes
    d. create my own recipes
    e. see my bookmarks and own recipes when I leave the application and come back later
2. Features
    a. search functionality -> input field to send request to API with searched keywords; display results with pagination; display recipe with relevant data
    b. change servings functionality
    c. bookmarking functionality; display list of bookmarks
    d. users can upload own recipes, automatic bookmarking, user can only see their own recipes
    e. store bookmark data in localStorage; read the bookmarks + display

////////////////////////////////////////////////////////////////////////
// Listening for load and haschange events
// - add multiple events to the eventListener =>
// syntax: [commands/what to wait to listen].forEach(event => window.addEventListener(event, what to listen for))
// e.g. ['hashchange', 'load'].forEach(ev => window.addEventListener(ev, showRecipe));

////////////////////////////////////////////////////////////////////////
// The MVC Architecture
// -> MVC - model-view-controller

// Why Worry about Architecture?
    1. Structure: 
    - architecture gives our project the structure in which we can then write the code
// - in programming, structure = how we organize and divide the code into different modules, classes, and functions
    2. Maintainability:
    - keep in mind that the project is never done
    - we need to be able to easily change it in the future => only works if the project is nicely structured
    3. Expandability:
    - we need to be able to easily add new features 

- in order to maintain good structure, we can either create our own architecture (for small projects), or we can use a well-established architecture pattern like MVC, MPV, Flux, etc. (bigger projects)
- we can also use framework/libraries to organize the architecture for us, such as React, Angular, Vue, or Svelte
- no matter where the architecture comes from, there are some components that any architecture must have 

    Components of any architecture:
1. Business logic
    - code that solves the actual business problem
    - code directly related to what business does and what it needs
    e.g. sending messages, storing transactions, calculating taxes, etc.
2. State
    - application's state = essentially stores all the data about the aplication
    - should be the 'single source of truth'
    - UI should be kept in sync with the state
    - state libraries exist (Redux, MobX)
    e.g. data fetched from an API, data that the user inputs, what page the user is currently viewing, etc.
3.HTTP library
    - responsible for making and receiving AJAX requests
    - optional but almost always necessary in real-world apps
4. Application logic (router)
    - code that is only concerned about the implementation of the application itself
    - called 'router' because it maps actions to the user's navigation
    e.g. handles navigation and UI events
5. Presentation logic (UI layer)
    - code that is concerned about the visible part of the application
    - essentially displays application state

The Model-View-Controller (MVC) Architecture
   - this architecture contains three big parts: model, view and controller
a. View:
    - presentation logic
    - the part of the application interacting with the user
b. Model:
    - all about the application's data
    - usually contains the state and business logic that manipulates the state
    - also contains the HTTP library, that might get some data from the web (from an API, or backend)
c. Controller:
    - contains the application logic
    - creates a bridge between the model and view, because those two do not know anything about each other
    - the model and view live independently of one another, and don't even know that the other exists


=> one of the goals of the MVC pattern is to separate business logic from presentation logic, because it makes developing the application much easier
=> as a consequence, we need a bridge, and that is the controller

////////////////////////////////////////////////////////////////////////
// Helpers and Configuration files
// - real world applications have two special modules that are completely independent of the rest of the architecture:
    a. Module for project configuration 
        - in this file, we put all the variables that should be constants and should be reused across the project
        - having this file will allow us to easily configure the project by simply changing some of the data that is in the config file
        - only the data that contains define important data about the application itself
    b. Module for general helper functions
        - contains a couple of functions that we reuse over and over in our project



/////////////////////////////////////////////////////////////////////////
// Event Handlers in MVC: Publisher-Subscriber Pattern
    - events should be handled in the controller (otherwise we would have application logic in the view)
    - events should be listened for in the view (otherwise we would need DOM elements in the controller)
    - we cannot call any of the functions  that are in the controller from the view => only works the other way around

=> Solution: the Publisher-Subscriber Design Pattern
    - design patters in programming = standard solutions to certain kinds of problems
    => Publisher = code that knows when to react;
    => Subscriber = code that wants to react; the code that should be executed when the event happens
    - we can subscribe to the publisher by passing in the subscriber function as an argument => as soon as the program loads, the (init) function is called, which in turn immediately calls the function from the view
    - all of this is possible because the controller imports both the view and the model
    - the subscriber will be passed into the the publisher as an argument => the two functions are finally connected
    - after that, the publisher listens for events, and uses the subscriber as callback
    => as soon as the publisher publishes an event, the subscriber will get called


*/
