import { Injectable } from '@nestjs/common';
import { User } from '../../autogen/schema.graphql';
import { InjectConnection } from '@nestjs/typeorm';
import { Connection } from 'typeorm';

@Injectable()
export class UserService {
  constructor(@InjectConnection() private readonly connection: Connection) {}

  async findAll(): Promise<User[]> {
    try {
      return await this.connection.query(`
SELECT id  
      ,mobile_phone AS mobilePhone
      ,user_name    AS name
      ,email
      ,role
  FROM user_master`);
    } catch (e) {
      console.log(e);
    }
  }
}
