# To Do App

###  Small application for managing personal daily tasks 

## Table of Contents
* [Introduction](#introduction)
* [Stack](#stack-and-versions)
* [Project Structure](#project-structure)
* [How to Start](#how-to-start)
* [API](#api)

## Introduction
### This app was build using Node.js with Typescript on backend side, React on frontend side and Mongo for database. You can use it to register tasks and change status. The statuses are : Active, Canceled,  On Process, Stand by and Completed. 

## Stack and tools
**Repo Name:**  todo-app  
**Node:** V19.0 +   
**React**  
**Typescript**  
**Express**  
**Mongo - mongoose**  
**Docker - Docker Compose**

## Project Structure
### The project is structured with two main directories `api`: that contains backend files. And `client` folder which inside content has the user interfaces files. 
* api/  
  * src/ 
    * config/
    * controllers/
    * middleware/
    * models/
    * routes/
  * server.ts 
* client/  
  * src/  
  * public/  
  * index.html  

## How to start?

1. Clone the github repository:   
    ```git clone repository-url``` 

2. Set up environment variables at api. Create a `.env` file at the api folder, add `PORT`,  `USER`, `PASSWORD`, etc.

2. Install backend dependencies: `cd todoapp/api` and  then   
   ``` npm install ```

3. Install frontend dependencies: `cd todoapp/client` and then  
   ``` npm install ```

4. Run the application `cd todoapp/api` directory and type:  
    ``` docker-compose up --build ```

## API
  * GET v1/api/task/ List of tasks.
  * POST v1/api/task/ Create a new task.
  * GET v1/api/task/:id Get task detail.
  * PUT v1/api/task/:id Update task data.
  * DELETE v1/api/task/:id Delete task.
  * GET v1/api/task/ Monthly summary of task grouped by status.
  * POST v1/api/auth/register Register.
  * POST v1/api/auth/login Login
