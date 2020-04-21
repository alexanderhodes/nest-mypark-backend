import {Field, ID, ObjectType} from "@nestjs/graphql";
import {Column, Entity, PrimaryColumn} from "typeorm";

@ObjectType()
@Entity({name: "parkingspacestatus"})
export class ParkingSpaceStatus {

    @Field(type => ID, { nullable: true })
    @PrimaryColumn()
    id: string;
    @Field({ nullable: true })
    @Column()
    name: string;
    @Field({ nullable: true })
    @Column()
    color: string;

}
