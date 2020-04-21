import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {BookingStatus} from "../models/booking-status.entity";
import {Injectable} from "@nestjs/common";

@Injectable()
export class BookingStatusService {

    constructor(
        @InjectRepository(BookingStatus) private readonly bookingStatusRepository: Repository<BookingStatus>
    ) {}

    findAll(): Promise<BookingStatus[]> {
        return this.bookingStatusRepository.find();
    }

    findOne(id: string): Promise<BookingStatus> {
        return this.bookingStatusRepository.findOne(id);
    }

}
