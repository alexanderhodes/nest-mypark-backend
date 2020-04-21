import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {SeriesAbsence} from "../models/series-absence";
import {Connection, Repository} from "typeorm";

@Injectable()
export class SeriesAbsenceService {

    constructor(
        @InjectRepository(SeriesAbsence) private readonly seriesAbsenceRepository: Repository<SeriesAbsence>,
        private connection: Connection
    ) {}

    findAll(): Promise<SeriesAbsence[]> {
        return this.connection.getRepository(SeriesAbsence)
            .createQueryBuilder("seriesabsence")
            .leftJoinAndSelect("seriesabsence.user", "user")
            .getMany();
    }

    findOne(id: string): Promise<SeriesAbsence> {
        return this.connection.getRepository(SeriesAbsence)
            .createQueryBuilder("seriesabsence")
            .leftJoinAndSelect("seriesabsence.user", "user")
            .where(`id = '${id}'`)
            .getOne();
    }

    findAllByUser(userId: string): Promise<SeriesAbsence[]> {
        return this.connection.getRepository(SeriesAbsence)
            .createQueryBuilder("seriesabsence")
            .leftJoinAndSelect("seriesabsence.user", "user")
            .where(`user.id = '${userId}'`)
            .getMany();
    }

}
