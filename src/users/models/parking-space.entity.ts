import {Field, ID, ObjectType} from "@nestjs/graphql";
import {Column, Entity, JoinColumn, ManyToOne, PrimaryColumn} from "typeorm";
import {ParkingSpaceStatus} from "./parking-space-status.entity";

@ObjectType()
@Entity({name: "parkingspaces"})
export class ParkingSpace {

    @Field(type => ID, { nullable: true })
    @PrimaryColumn()
    id: string;
    @Field({ nullable: true })
    @Column()
    number: string;
    @Field({ nullable: true })
    @ManyToOne(type => ParkingSpaceStatus)
    @JoinColumn({name: "parkingSpaceStatusId"})
    parkingSpaceStatus: ParkingSpaceStatus;

}
