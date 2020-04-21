import {Args, Query, Resolver} from "@nestjs/graphql";
import {ParkingSpace} from "../models/parking-space.entity";
import {ParkingSpaceService} from "../services/parking-space.service";

@Resolver(of => ParkingSpace)
export class ParkingSpaceResolver {

    constructor(private readonly parkingSpaceService: ParkingSpaceService) {}

    @Query(returns => [ParkingSpace])
    allParkingSpaces(): Promise<ParkingSpace[]> {
        return this.parkingSpaceService.findAll();
    }

    @Query(returns => ParkingSpace, {nullable: true})
    findParkingSpaceById(@Args('id') id: string): Promise<ParkingSpace> {
        return this.parkingSpaceService.findOne(id);
    }

}
