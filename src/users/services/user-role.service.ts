import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {UserRole} from "../models/user-role.entity";
import {Repository} from "typeorm";

@Injectable()
export class UserRoleService {

    constructor(
        @InjectRepository(UserRole) private readonly userRoleRepository: Repository<UserRole>
    ){}

    findAll(): Promise<UserRole[]> {
        return this.userRoleRepository.find();
    }

    findOne(id: string): Promise<UserRole> {
        return this.userRoleRepository.findOne(id);
    }

}
