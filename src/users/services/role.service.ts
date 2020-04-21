import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {Role} from "../models/role.entity";
import {Repository} from "typeorm";

@Injectable()
export class RoleService {

    constructor(
        @InjectRepository(Role) private readonly roleRepository: Repository<Role>
    ) { }

    findAll(): Promise<Role[]> {
        return this.roleRepository.find();
    }

    findOne(id: string): Promise<Role> {
        return this.roleRepository.findOne(id);
    }
}
