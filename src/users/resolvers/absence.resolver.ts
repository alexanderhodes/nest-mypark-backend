import {Args, Query, Resolver} from "@nestjs/graphql";
import {Absence} from "../models/absence.entity";
import {AbsenceService} from "../services/absence.service";

@Resolver(of => Absence)
export class AbsenceResolver {

    constructor(private absenceService: AbsenceService) {}

    @Query(returns => [Absence])
    findAllAbsences(): Promise<Absence[]> {
        return this.absenceService.findAll();
    }

    @Query(returns => [Absence])
    findAbsencesByUser(@Args('userId') userId: string): Promise<Absence[]> {
        return this.absenceService.findAllByUser(userId);
    }

}
