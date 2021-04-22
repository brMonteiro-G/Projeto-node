import {Router} from "express";
import { getCustomRepository } from "typeorm";
import { SettingsRepository } from "./src/repositories/settingsRepository";

  const routes = Router();

  routes.post("/settings", async  (request,response) => {
    const {chat , username} = request.body //Utilizando o conceito de desestruturação para não ter que chamar body.chat e body.username

    const settingsRepository = getCustomRepository(SettingsRepository);

    const settings = settingsRepository.create({
      chat,
      username
    })

    await settingsRepository.save(settings);

    return response.json(settings)

  })

  export{routes} ;