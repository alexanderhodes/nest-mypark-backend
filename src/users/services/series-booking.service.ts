import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {SeriesBooking} from "../models/series-booking.entity";
import {Connection, Repository} from "typeorm";

@Injectable()
export class SeriesBookingService {

    constructor(
       @InjectRepository(SeriesBooking) private readonly seriesBookingRepository: Repository<SeriesBooking>,
       private connection: Connection
    ){}

    findAll(): Promise<SeriesBooking[]> {
        return this.connection.getRepository(SeriesBooking)
            .createQueryBuilder("seriesbooking")
            .leftJoinAndSelect("seriesbooking.user", "user")
            .getMany();
    }

    findOne(id: string): Promise<SeriesBooking> {
        return this.connection.getRepository(SeriesBooking)
            .createQueryBuilder("seriesbooking")
            .leftJoinAndSelect("seriesbooking.user", "user")
            .where(`id = '${id}'`)
            .getOne();
    }

    findAllByUser(userId: string): Promise<SeriesBooking[]> {
        return this.connection.getRepository(SeriesBooking)
            .createQueryBuilder("seriesbooking")
            .leftJoinAndSelect("seriesbooking.user", "user")
            .where(`user.id = '${userId}'`)
            .getMany();
    }


}
