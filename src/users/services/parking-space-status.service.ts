import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {ParkingSpaceStatus} from "../models/parking-space-status.entity";
import {Repository} from "typeorm";

@Injectable()
export class ParkingSpaceStatusService {

    constructor(
        @InjectRepository(ParkingSpaceStatus) private readonly parkingSpaceStatusRepository: Repository<ParkingSpaceStatus>
    ) { }

    findAll(): Promise<ParkingSpaceStatus[]> {
        return this.parkingSpaceStatusRepository.find();
    }

    findOne(id: string): Promise<ParkingSpaceStatus> {
        return this.parkingSpaceStatusRepository.findOne(id);
    }

}
