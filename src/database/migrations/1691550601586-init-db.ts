import { MigrationInterface, QueryRunner } from "typeorm";

export class InitDb1691550601586 implements MigrationInterface {
    name = 'InitDb1691550601586'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`users\` DROP FOREIGN KEY \`FK_b8d62b3714f81341caa13ab0ff0\``);
        await queryRunner.query(`ALTER TABLE \`users\` CHANGE \`group_id\` \`group_id\` int(11) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`users\` CHANGE \`updated_by\` \`updated_by\` int(11) NULL`);
        await queryRunner.query(`ALTER TABLE \`user_groups\` CHANGE \`updated_by\` \`updated_by\` int(11) NULL`);
        await queryRunner.query(`ALTER TABLE \`user_group_permission\` DROP FOREIGN KEY \`FK_d74c70c1408db38a0adec019c92\``);
        await queryRunner.query(`ALTER TABLE \`user_group_permission\` DROP FOREIGN KEY \`FK_e6df0f494b6c431370d2d2952a1\``);
        await queryRunner.query(`ALTER TABLE \`user_group_permission\` CHANGE \`user_group_id\` \`user_group_id\` int(11) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`user_group_permission\` CHANGE \`permission_id\` \`permission_id\` int(11) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`user_group_permission\` CHANGE \`updated_by\` \`updated_by\` int(11) NULL`);
        await queryRunner.query(`ALTER TABLE \`permissions\` CHANGE \`updated_by\` \`updated_by\` int(11) NULL`);
        await queryRunner.query(`ALTER TABLE \`users\` ADD CONSTRAINT \`FK_b8d62b3714f81341caa13ab0ff0\` FOREIGN KEY (\`group_id\`) REFERENCES \`user_groups\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`user_group_permission\` ADD CONSTRAINT \`FK_e6df0f494b6c431370d2d2952a1\` FOREIGN KEY (\`permission_id\`) REFERENCES \`permissions\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`user_group_permission\` ADD CONSTRAINT \`FK_d74c70c1408db38a0adec019c92\` FOREIGN KEY (\`user_group_id\`) REFERENCES \`user_groups\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user_group_permission\` DROP FOREIGN KEY \`FK_d74c70c1408db38a0adec019c92\``);
        await queryRunner.query(`ALTER TABLE \`user_group_permission\` DROP FOREIGN KEY \`FK_e6df0f494b6c431370d2d2952a1\``);
        await queryRunner.query(`ALTER TABLE \`users\` DROP FOREIGN KEY \`FK_b8d62b3714f81341caa13ab0ff0\``);
        await queryRunner.query(`ALTER TABLE \`permissions\` CHANGE \`updated_by\` \`updated_by\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`user_group_permission\` CHANGE \`updated_by\` \`updated_by\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`user_group_permission\` CHANGE \`permission_id\` \`permission_id\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`user_group_permission\` CHANGE \`user_group_id\` \`user_group_id\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`user_group_permission\` ADD CONSTRAINT \`FK_e6df0f494b6c431370d2d2952a1\` FOREIGN KEY (\`permission_id\`) REFERENCES \`permissions\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`user_group_permission\` ADD CONSTRAINT \`FK_d74c70c1408db38a0adec019c92\` FOREIGN KEY (\`user_group_id\`) REFERENCES \`user_groups\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`user_groups\` CHANGE \`updated_by\` \`updated_by\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`users\` CHANGE \`updated_by\` \`updated_by\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`users\` CHANGE \`group_id\` \`group_id\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`users\` ADD CONSTRAINT \`FK_b8d62b3714f81341caa13ab0ff0\` FOREIGN KEY (\`group_id\`) REFERENCES \`user_groups\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
