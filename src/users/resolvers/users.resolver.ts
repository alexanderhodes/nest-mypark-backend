import {Args, Query, Resolver} from "@nestjs/graphql";
import {User} from "../models/user.entity";
import {UsersService} from "../services/users.service";

@Resolver(of => User)
export class UsersResolver {

    constructor(private readonly usersService: UsersService) {}

    @Query(returns => [User])
    allUsers(): Promise<User[]> {
        return this.usersService.findAll();
    }

    @Query(returns => User, {nullable: true})
    findUserById(@Args('id') id: string): Promise<User> {
        return this.usersService.findOne(id);
    }

}
