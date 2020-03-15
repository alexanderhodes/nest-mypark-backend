import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {Absence} from "../models/booking.entity";
import {Connection, Repository} from "typeorm";

@Injectable()
export class AbsenceService {

    constructor(
        @InjectRepository(Absence) private readonly bookingService: Repository<Absence>,
        private connection: Connection
    ) {}

    findAll(): Promise<Absence[]> {
        return this.connection.getRepository(Absence)
            .createQueryBuilder("booking")
            .leftJoinAndSelect("booking.user", "user")
            .getMany();
    }

    findOne(id: string): Promise<Absence> {
        return this.connection.getRepository(Absence)
            .createQueryBuilder("booking")
            .leftJoinAndSelect("booking.user", "user")
            .where(`id = '${id}'`)
            .getOne();
    }

    findAllByUser(userId: string): Promise<Absence[]> {
        return this.connection.getRepository(Absence)
            .createQueryBuilder("booking")
            .leftJoinAndSelect("booking.user", "user")
            .where(`user.id = '${userId}'`)
            .getMany();
    }

}
