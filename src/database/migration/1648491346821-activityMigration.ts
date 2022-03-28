import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class activityMigration1648491346821 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:"activity",
                columns:[
                    {
                        name:"id",
                        type:"uuid",
                        isPrimary: true
                    },
                    {
                        name:"nome",
                        type:"varchar"
                    },
                    {
                        name: "materia",
                        type:"varchar"
                    },
                    {
                        name: "user_id",
                        type:"uuid"
                    }
                ],
                foreignKeys:[
                    {
                        name: "fk_user_id",
                        columnNames: ["user_id"],
                        referencedTableName: "User",
                        referencedColumnNames: ["id"]
                    },
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("activity");
    }

}
