import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {ParkingSpace} from "../models/parking-space.entity";
import {Connection, Repository} from "typeorm";

@Injectable()
export class ParkingSpaceService {

    constructor(
        @InjectRepository(ParkingSpace) private readonly parkingSpaceService: Repository<ParkingSpace>,
        private connection: Connection
    ) {}

    findAll(): Promise<ParkingSpace[]> {
        return this.connection.getRepository(ParkingSpace)
            .createQueryBuilder("parkingSpace")
            .leftJoinAndSelect("parkingSpace.parkingSpaceStatus", "parkingSpaceStatus")
            .getMany();
    }

    findOne(id: string): Promise<ParkingSpace> {
        return this.connection.getRepository(ParkingSpace)
            .createQueryBuilder("parkingSpace")
            .leftJoinAndSelect("parkingSpace.parkingSpaceStatus", "parkingSpaceStatus")
            .where(`parkingSpace.id = '${id}'`)
            .getOne();
    }

}
