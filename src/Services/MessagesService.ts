import { getCustomRepository } from "typeorm"
import { MessagesRepository } from "../repositories/MessagesRepository"

interface IMessagesCreate {
  admin_id?: string, // ? define atributo como não obrigatório, podendo ou não vir 
  text: string,
  user_id: string
}

class MessagesService {
  async create({ admin_id, text, user_id }: IMessagesCreate) {
    const messagesRepository = getCustomRepository(MessagesRepository)

    const message = messagesRepository.create({
      admin_id,
      text,
      user_id
    })

    await messagesRepository.save(message)
    return message

  }


}

export { MessagesService }