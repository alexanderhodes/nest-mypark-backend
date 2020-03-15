import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {Booking} from "../models/booking.entity";
import {Connection, Repository} from "typeorm";

@Injectable()
export class BookingService {

    constructor(
        @InjectRepository(Booking) private readonly bookingService: Repository<Booking>,
        private connection: Connection
    ) {}

    findAll(): Promise<Booking[]> {
        return this.connection.getRepository(Booking)
            .createQueryBuilder("booking")
            .leftJoinAndSelect("booking.user", "user")
            .getMany();
    }

    findOne(id: string): Promise<Booking> {
        return this.connection.getRepository(Booking)
            .createQueryBuilder("booking")
            .leftJoinAndSelect("booking.user", "user")
            .where(`id = '${id}'`)
            .getOne();
    }

    findAllByUser(userId: string): Promise<Booking[]> {
        return this.connection.getRepository(Booking)
            .createQueryBuilder("booking")
            .leftJoinAndSelect("booking.user", "user")
            .where(`user.id = '${userId}'`)
            .getMany();
    }

}
