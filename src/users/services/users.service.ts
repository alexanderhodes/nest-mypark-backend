import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {User} from "../models/user.entity";
import {Connection, Repository} from "typeorm";

@Injectable()
export class UsersService {

    constructor(
        @InjectRepository(User) private readonly usersRepository: Repository<User>,
        private connection: Connection
    ){}

    findAll(): Promise<User[]> {
        return this.connection.getRepository(User)
            .createQueryBuilder("user")
            .leftJoinAndSelect("user.parkingSpace", "parkingSpace")
            .leftJoinAndSelect("parkingSpace.parkingSpaceStatus", "parkingSpaceStatus")
            .getMany();
    }

    findOne(id: string): Promise<User> {
        return this.connection.getRepository(User)
            .createQueryBuilder("user")
            .where(`user.id = '${id}'`)
            .leftJoinAndSelect("user.parkingSpace", "parkingSpace")
            .leftJoinAndSelect("parkingSpace.parkingSpaceStatus", "parkingSpaceStatus")
            .getOne();
    }

}
