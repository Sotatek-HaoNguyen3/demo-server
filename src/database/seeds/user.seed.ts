import { Factory, Seeder } from 'typeorm-seeding';
import { Connection } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { User } from 'src/modules/users/entities/user.entity';

export const hashPassword = async (plainPassword: string): Promise<string> => {
  return await bcrypt.hash(plainPassword + process.env.PASSWORD_SECRET_KEY, 10);
};

export default class UserSeed implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await connection
      .createQueryBuilder()
      .insert()
      .into(User)
      .values([
        {
          username: 'abc01',
          email: 'abc01@gmail.com',
          password: await hashPassword('123456'),
        },
        {
          username: 'abc02',
          email: 'abc02@gmail.com',
          password: await hashPassword('123456'),
        },
      ])
      .execute();
  }
}
