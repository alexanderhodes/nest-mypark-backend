import {Controller, Get} from "@nestjs/common";
import {UsersService} from "../services/users.service";
import {User} from "../models/user.entity";

@Controller('users')
export class UsersController {

    constructor(private readonly userService: UsersService) {}

    @Get()
    async getUsers(): Promise<User[]> {
        return this.userService.findAll();
    }

}
