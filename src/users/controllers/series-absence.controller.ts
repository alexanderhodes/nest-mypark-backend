import {Controller, Get, Param} from "@nestjs/common";
import {SeriesAbsenceService} from "../services/series-absence.service";
import {SeriesAbsence} from "../models/series-absence";

@Controller('seriesabsence')
export class SeriesAbsenceController {

    constructor(private readonly seriesAbsenceService: SeriesAbsenceService) {}

    @Get()
    async getAll(): Promise<SeriesAbsence[]> {
        return this.seriesAbsenceService.findAll();
    }

    @Get(':userId')
    async getAllByUser(@Param('userId') userId: string): Promise<SeriesAbsence[]> {
        return this.seriesAbsenceService.findAllByUser(userId);
    }

}
