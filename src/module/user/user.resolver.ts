import { Query, Resolver } from '@nestjs/graphql';
import { User } from '../../autogen/schema.graphql';
import { UserService } from './user.service';

@Resolver('User')
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query('users')
  async getAll(): Promise<User[]> {
    console.log(`getAll()`);
    return await this.userService.findAll();
  }
}
