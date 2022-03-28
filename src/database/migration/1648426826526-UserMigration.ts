import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class UserMigration1648426826526 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "User",
                columns:[
                    {
                        name:"id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name:"email",
                        type:"varchar"
                    },
                    {
                        name:"cpf",
                        type:"varchar"
                    },
                    {
                        name:"senha",
                        type:"varchar",
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("User");
    }

}
