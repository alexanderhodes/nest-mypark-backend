import {Controller, Get, Param} from "@nestjs/common";
import {AbsenceService} from "../services/absence.service";
import {Absence} from "../models/absence.entity";

@Controller('absences')
export class AbsenceController {

    constructor(private readonly absenceService: AbsenceService) {}

    @Get()
    async getAll(): Promise<Absence[]> {
        return this.absenceService.findAll();
    }

    @Get(':userId')
    async getAllByUser(@Param('userId') userId: string): Promise<Absence[]> {
        return this.absenceService.findAllByUser(userId);
    }

}
