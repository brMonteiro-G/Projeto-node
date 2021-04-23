import { getCustomRepository } from "typeorm";
import { SettingsRepository } from "../repositories/SettingsRepository";

interface ISettingsCreate{
  chat:boolean; 
  username:string;
}

//regras de negócio da aplicação
class SettingsService{

async create({chat,username} :ISettingsCreate){
  const settingsRepository = getCustomRepository(SettingsRepository);

  //Validando se só existe um usuário no banco de dados 
  const userAlreadyExists = await settingsRepository.findOne({
    username
  })

  if(userAlreadyExists){
    throw new Error ("User already exists !")
  }
  //Fim da validação 
  const settings = settingsRepository.create({
    chat,
    username
  })
  await settingsRepository.save(settings);

  return settings;
}


}

export {SettingsService}