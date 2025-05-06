# To Do App

###  Small application for managing personal daily tasks 

## Table of Contents
* [Introduction](#introduction)
* [Stack](#stack-and-versions)
* [Project Structure](#project-structure)
* [How to Start](#how-to-start)
* [API](#api)

## Introduction
### This app was build using Node.js with Typescript on backend side, React on frontend side and Mongo for database. You can use it to register tasks and change status. The statuses are : Created, On Process and Completed. 

## Stack and tools
**Repo Name:**  todo-app  
**Node**  
**React**  
**Typescript**  
**Express**  
**Mongo - mongoose**  
**Docker - Docker Compose**

## Project Structure
### The project is structured with two main directories `api`: that contains backend files. And `client` folder which inside content has the user interfaces files. 
* api/  
  * user/
    * Aplication/ 
    * Domain/
    * Infraestructure/
  * task/ 
    * Aplication/
    * Domain/
    * Infraestructure/
  * routes/
  * utils/
  * frameworks /
  * server.ts 
* client/  
  * src/  
  * public/  
  * index.html  

## How to start?

1. Clone the github repository: 
    ```
      git clone repository-url
2. Set up environment variables. Create a `.env` file at the api folder, add `PORT`,  `USER`, `PASSWORD`, etc.  

5. Run the application `cd todo-app` directory and type:  
    ``` docker-compose up --build ```

## API
  * GET /api/task/: List of tasks.
  * POST /api/task/: Create a new task.
  * GET /api/task/:id: Get task detail.
  * PUT /api/task/:id: Update task data.
  * DELETE /api/tast/:id: Delete task.
