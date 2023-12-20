# To-Do Web App

This project is a simple To-Do website developed using Spring Boot for the backend, MySQL for the database, and Angular for the frontend.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Running the Application](#running-the-application)
- [Contributing](#contributing)
- [License](#license)

## Features

- Create, Read, Update, Delete (CRUD) operations for tasks.
- User authentication and authorization.
- Responsive user interface with Angular.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Java 8 or higher
- Node.js and npm
- Angular CLI
- MySQL database
- Your favorite IDE (IntelliJ IDEA, Eclipse, Visual Studio Code)

## Getting Started

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Sobunge/to-do.git
   cd todo-web-app

2. **Set up the MySQL database:**

   1. Create a new database named `todo`.
   2. Update the database configuration in `/backend/src/main/resources/application.properties`.
      
3. **Set up Angular frontend:**

   ```bash
   cd frontend
   npm install

4. **Set up Spring Boot backend:**

   1. Open the project in your IDE.
   2. Update application.properties with the correct database configuration.
  
## Project Structure

   todo-web-app/
│
├── backend/               # Spring Boot backend
│   ├── src/
│   ├── ...
│   └── pom.xml
│
└── frontend/              # Angular frontend
    ├── src/
    ├── ...
    └── package.json


