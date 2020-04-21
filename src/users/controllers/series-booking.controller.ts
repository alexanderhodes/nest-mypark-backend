import {Controller, Get, Param} from "@nestjs/common";
import {SeriesAbsenceController} from "./series-absence.controller";
import {SeriesBookingService} from "../services/series-booking.service";
import {SeriesBooking} from "../models/series-booking.entity";

@Controller('seriesbooking')
export class SeriesBookingController {

    constructor(private readonly seriesBookingService: SeriesBookingService) {}

    @Get()
    async getAll(): Promise<SeriesBooking[]> {
        return this.seriesBookingService.findAll();
    }

    @Get(':userId')
    async getAllByUser(@Param('userId') userId: string): Promise<SeriesBooking[]> {
        return this.seriesBookingService.findAllByUser(userId);
    }

}
