import {Args, Parent, Query, ResolveField, Resolver} from "@nestjs/graphql";
import {User} from "../models/user.entity";
import {UsersService} from "../services/users.service";
import {ParkingSpaceService} from "../services/parking-space.service";
import {ParkingSpace} from "../models/parking-space.entity";
import {ParkingSpaceStatusService} from "../services/parking-space-status.service";

@Resolver(of => User)
export class UsersResolver {

    constructor(private readonly usersService: UsersService,
                private readonly parkingSpaceService: ParkingSpaceService) {}

    @Query(returns => [User])
    allUsers(): Promise<User[]> {
        return this.usersService.findAll();
    }

    @Query(returns => User, {nullable: true})
    findUserById(@Args('id') id: string): Promise<User> {
        return this.usersService.findOne(id);
    }

    // @ResolveField()
    // async parkingSpace(@Parent() user: User) {
    //     return user.parkingSpace ? await this.parkingSpaceService.findOne(user.parkingSpace.id) : null;
    // }

}
