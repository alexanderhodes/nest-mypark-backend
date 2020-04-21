import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {Absence} from "../models/Absence.entity";
import {Connection, Repository} from "typeorm";

@Injectable()
export class AbsenceService {

    constructor(
        @InjectRepository(Absence) private readonly AbsenceService: Repository<Absence>,
        private connection: Connection
    ) {}

    findAll(): Promise<Absence[]> {
        return this.connection.getRepository(Absence)
            .createQueryBuilder("absence")
            .leftJoinAndSelect("absence.user", "user")
            .getMany();
    }

    findOne(id: string): Promise<Absence> {
        return this.connection.getRepository(Absence)
            .createQueryBuilder("absence")
            .leftJoinAndSelect("absence.user", "user")
            .where(`id = '${id}'`)
            .getOne();
    }

    findAllByUser(userId: string): Promise<Absence[]> {
        return this.connection.getRepository(Absence)
            .createQueryBuilder("absence")
            .leftJoinAndSelect("absence.user", "user")
            .where(`user.id = '${userId}'`)
            .getMany();
    }

}
