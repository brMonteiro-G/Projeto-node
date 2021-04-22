import express from "express"

import "./database" //importando arquivo index.ts

import {routes} from "../routes"

const app = express(); //definindo servidor 

app.use(express.json()) //Aqui definimos que o express vai receber as informações em fomato JSON 

app.use(routes)

app.listen(3333, ()=> console.log("Server is running on port 3333")) 
