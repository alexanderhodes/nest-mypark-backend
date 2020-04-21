import {Booking} from "../models/booking.entity";
import {Controller, Get, Param} from "@nestjs/common";
import {BookingService} from "../services/booking.service";

@Controller('bookings')
export class BookingController {

    constructor(private readonly bookingService: BookingService) {}

    @Get()
    async getAll(): Promise<Booking[]> {
        return this.bookingService.findAll();
    }

    @Get(':userId')
    async getAllByUser(@Param('userId') userId: string): Promise<Booking[]> {
        return this.bookingService.findAllByUser(userId);
    }

}
