import { Request, Response } from "express"
import { getCustomRepository } from "typeorm";
import { SettingsRepository } from "../repositories/SettingsRepository";
import { SettingsService } from "../Services/SettingsService";

class SettingsController {

  async create(request: Request, response: Response) {
    const { chat, username } = request.body //Utilizando o conceito de desestruturação para não ter que chamar body.chat e body.username

    const settingsService = new SettingsService()

    try {
      const settings = await settingsService.create({ chat, username });

      return response.json(settings);

    } catch (err) {
      return response.status(400).json({
        message: err.message
      })
    }

  }

}
export { SettingsController }