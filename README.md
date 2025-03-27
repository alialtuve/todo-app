# To Do App

###  Small application for managing personal daily tasks 

## Table of Contents
* [Introduction](#introduction)
* [Stack and versions](#stack-and-versions)
* [Project Structure](#project-structure)
* [How to Start](#how-to-start)
* [API](#api)

## Introduction
### This app was build in Node.js and using Typescript.
## Stack and tools
**Repo Name:**  todo-app  
**Node:** v19.4.0  
**React:**  
**Typescript**  
**Express**
**Mongo and mongoose**  
**Docker and Docker Compose**

## Project Structure
### The project is structured with two main directories `api`: that contains backend files. And `client` folder which inside content has the user interfaces files. 
* api/  
  * models/:  
  * routes/:  
  * services/:  
  * repositories/:  
  * infraestructure/:
  * server.ts:
* client/  
  * src/:  
  * public/:  
  * index.html:  

## How to start?

1. Clone the github repository: 
    ```
      git clone repository-url
    ```
2. Install API dependencies `cd todo-app/api` directory: 
    ```
      npm install
    ```
3. Install Client dependencies `cd todo-app/client` directory:
    ```
     npm install
    ```
4. Set up environment variables. Create a `.env` file at the api folder, add `PORT`,  `USER`,         `SECRET_KEY`, etc.  

5. Run the application `cd todo-app/api` directory:
    ``` npm run dev ```

    OR use docker compose
    ``` docker-compose up --build ```

## API
  * POST /api/access/register: Register a new user.
  * POST /api/acess/login: Login with existing user credentials and receive an access token.
  * GET /api/task/: List of tasks.
  * POST /api/task/: Create a new task.
  * GET /api/task/:id: Get task detail.
  * PUT /api/task/:id: Update task data.
  * DELETE /api/tast/:id: Delete task.
