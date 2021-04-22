import {Column, Entity, CreateDateColumn, UpdateDateColumn, PrimaryColumn} from "typeorm"
import {v4 as uuid} from "uuid" 

//Necessário habilitar no tsconfig.json seguindo doc do typeorm

@Entity()
class Setting {

  @PrimaryColumn()
  id: string 

  @Column()
  username: string
  
  @Column()
  chat: boolean
  
  @UpdateDateColumn()
  update_at: Date

  @CreateDateColumn()
  created_at: Date

  constructor(){
    if(!this.id){  //Caso não venha preenchido o id, será gerado um uuid para preenche-lo 
      this.id = uuid();
    }
  }

}



export{Setting}