![Logo](img/ucol-logo.jpg)

# Práctica 17: Utilizando el servicio de Mongo DB Atlas

> Segunda Parcial

- FACULTAD DE TELEMATICA
- INGENIERÍA EN SOFTWARE
- “4ºG”
- PROGRAMACIÓN WEB
- CATEDRATICO: ULIBARRI IRETA CARLOS
- AGUIRRE ROMERO RAMÓN ALEJANDRO

> ENTREGA: LUNES 16 DE MAYO DEL 2022

## EXPLICACIÓN DEL PROCESO POR EL AUTOR DEL CODIGO

# Notes App NodeMongo

This is a basic App to manage simple Notes on the web using Javascript Technologies like Nodejs, Mongodb, and other related technologies.

This app can do:

- CRUD Operations: create/read/update/delete Notes
- Allows a user to do login and save his personal notes

# Screenshot

![](docs/tasks.png)

# Environment Variables

This app needs the following environment Variables

- `MONGODB_HOST` this is the Mongodb URI string
- `MONGODB_DATABASE` Mongodb database name
- `NODE_ENV` node environment

# Docker

you can run a container for development

```shell
npm install
docker-compose up
```

## Default User

when the app is lauched, this will create an Admin user with the following credentials:

- email: admin@localhost
- password: adminpassword

# Recursos

- [Materia Bootswatch](https://www.bootstrapcdn.com/bootswatch/)
- [CSS Background uiGradients](https://uigradients.com/#Dull)
- [Repositorio Original](https://github.com/FaztTech/nodejs-notes-app.git)

# Tutorial

This app was created with educational purposes, so you can found the tutorials in the following links:

- [Version 2](https://www.youtube.com/playlist?list=PLo5lAe9kQrwqUEXK7oQbzv63KsdODzuAy), new tutorial made in 2020
  and these are old tutorials about this app
- [Version 1.0.0](https://youtu.be/-bI0diefasA)
