# PhotoDisplay

PhotoDisplay is a simple photo gallery that allows you to display photos from a URL and see them on the page.

# How to run de proyect

To run the project you must complete the following steps:

## 1. Configure the project

### 1. You need to install the dependencies of the repo running, on the root of the proyect:

```
yarn
```

### 2. Then you need to install the dependencies of backend and frontend with the command, on the root of the project:

```
yarn deps
```

## 2. Configure Backend

### Configure the environment variables by renaming the file `.template.env` to `.env` in the root of the frontend folder and filling the variables with the values you want.

### Run the database with docker:

1. Create the docker container to run the database with the command (Important to have the docker daemon open):
```
docker-compose up -d
```

### All endpoints are stored in the swagger documentation, in /api you can see all endpoints.

### Run /seed to create the initial data in the database.

## 3. Configure Frontend

### Configure the environment variables by renaming the file `.template.env` to `.env` in the root of the frontend folder and filling the variables with the values you want.

## 4. Run the project

### You will have to run this command in the root of the project to run it

```
yarn dev
```

> This command will run both proyects in parallel, the frontend and the backend.

# Technologies

## Frontend

- React
- Redux
- React Icons
- React Spinners

## Backend

- Nestjs
- Postgres
- Docker
- Swagger
