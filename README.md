# PROACTIVATE - CS 222 Project

## Introduction:
It is easy for students to miss assignments without having a centralized platform to keep track of all their assignments. Our website will be that platform where students can keep track of assignments and their deadlines, plan out their weeks with to-do lists, and improve study habits using a Pomodoro Timer.

## Application Architecture:
The front-end is responsible for the user interface. It must display a personalized dashboard for the user, Pomodoro Timer, a weekly schedule where users can create To-do lists for each day, and a Deadline Tracker where it keeps track of the weeks/days left before an assignment is due. It must also collect user input, which is sent to the backend.
The back-end is responsible for storing a list of user accounts in the MongoDB database, store a user’s information such as tasks, deadlines, and account information, and send it to the front-end to be displayed. 

## Languages/Libraries Used:
* MERN stack
* MongoDB for database
* React for frontend (Brenda & Divya)
* Node and Express for backend (Parul & Serena)
* Other technologies used:
    * Material UI (for components)
    * Jest (for testing)
    * Firebase (for authentication)

## How to run our program?

To download our code, run the following command in the terminal
```
https://github.com/CS222SP22/course-project-ap-a.git
```

Change directory to "proactivate-web" and run
```
npm start
```

The user would be asked to log into their existing account if not create a new account using an email and password.
Once logged in, the user can see their schedule, deadlines, and account information.

# Team members:
* Brenda Hariyanto
  * Made the front-end of Sign Up page
  * Routing and validation for Log In page
  * Navbar component for routing
  * My Account and its functionality (making it editable and connecting to firebase). Also worked on upload profile picture and made it show up in the dashboard
  * Deadline page and its functionality including the dyanamic Progress Bar component. Also made the get, and delete API Connecting it to the backend
  * The Dashboard page and make sure it displays total time of studying and the task of the week
  * Help Parul on connecting the Timer to the backend
  
* Divya Sathiyamoorthy
  * Front-end of Log In page
  * Schedule page and its functionality including adding tasks for each day, marking them as complete, and removing tasks. 
  * Timer page and its functionality
  * Unit tests for front-end
  * Help Parul on connecting the Schedule to the backend
  
* Parul Sharma
  * Wrote API functions to connect front-end with backend and firebase for
    * Log In
    * Sign Up
    * Schedule
    * Deadline
    * Dashboard
    * Timer
  
* Serena Tzeng
  * Wrote API functions to connect front-end with backend and firebase for login and sign up.