import {Controller, Get, Param} from "@nestjs/common";
import {ParkingSpaceService} from "../services/parking-space.service";
import {ParkingSpace} from "../models/parking-space.entity";

@Controller('parkingspaces')
export class ParkingSpaceController {

    constructor(private readonly parkingSpacesService: ParkingSpaceService) {}

    @Get()
    async getAll(): Promise<ParkingSpace[]> {
        return this.parkingSpacesService.findAll();
    }

    @Get()
    async getOne(@Param('id') id: string): Promise<ParkingSpace> {
        return this.parkingSpacesService.findOne(id);
    }

}
