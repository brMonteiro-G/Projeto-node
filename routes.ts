import {Router} from "express";
import { MessagesController } from "./src/Controllers/MessagesController";
import { SettingsController } from "./src/Controllers/SettingsController";
import { UsersController } from "./src/Controllers/UsersController";



  const routes = Router();
  const settingsController = new SettingsController();
  const usersController = new UsersController();
  const messagesController = new MessagesController()

  routes.post("/settings", settingsController.create)
  routes.post("/users", usersController.create)
  routes.post("/messages", messagesController.create)
  
  export{routes} ;