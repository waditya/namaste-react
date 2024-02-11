# Episode-06 : Exploring the World

## Monolith and Microservice Architecture

**Monolith Architure**

* Huge Bug Project
* Code consisting of APIs in same project
* Authentication code in same project
* UI code in same project
* Database code in same project
* Notification (example - Amazon SNS) code in same project 

All the code resides in same project. Even to make a small change - say like color of a button ,
the entire code needs to compiled, built and deploy the whole project. This is Monolith architecture.

**Microservices Architecture**

* Different service for different job
    - APIs
    - Authentication
    - UI
    - Notification
    - Database
    - Backend logic

* All these micro-services combine together to form a big app
* Seperate project for a seperate service
* This is known as Seperation of concerns based on Single Responsibility. 
* All teams work on their own Gut repos

* Service interact with each other. They are connected.
* All the individual services run on their individual port. 
* These services are connected using an API 

* Example : /, /api, /ui, /sns 





