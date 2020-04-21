import {Query, Resolver} from "@nestjs/graphql";
import {SeriesAbsence} from "../models/series-absence";
import {SeriesAbsenceService} from "../services/series-absence.service";

@Resolver(of => SeriesAbsence)
export class SeriesAbsenceResolver {

    constructor(private seriesAbsenceService: SeriesAbsenceService) {}

    @Query(returns => [SeriesAbsence])
    findSeriesAbsenceByUser(userId: string): Promise<SeriesAbsence[]> {
        return this.seriesAbsenceService.findAllByUser(userId);
    }

}
