import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateSettings1619019621575 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(    //Quando rodarmos o script migration:run, iremos executar o método up 
            new Table({
                name: "Settings",
                columns: [
                    {
                    name: "id",
                    type: "UUID",
                    isPrimary: true
                },
                {
                    name:"username",
                    type:"varchar"

                },
                {
                    name:"chat",
                    type:"boolean",
                    default: true
                },
                {
                    name:"update_at",
                    type:"timestamp",
                    default:"now()"
                },
                {
                    name:"created_at",
                    type:"timestamp",
                    default:"now()"
                }
                
            ]

            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> { //Quando quisermos reverter a partir do migration:revert, será executado o método down 
     await queryRunner.dropTable("settings");
    }

}
