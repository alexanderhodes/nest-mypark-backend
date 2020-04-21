import {Field, ID, ObjectType} from "@nestjs/graphql";
import {Column, Entity, JoinColumn, ManyToOne, PrimaryColumn} from "typeorm";
import {User} from "./user.entity";
import {BookingStatus} from "./booking-status.entity";
import {ParkingSpace} from "./parking-space.entity";

@ObjectType()
@Entity({name: "bookings"})
export class Booking {

    @Field(type => ID, {nullable: true})
    @PrimaryColumn()
    id: string;
    @Field({nullable: true})
    @ManyToOne(type => User)
    @JoinColumn()
    user: User;
    @Field({nullable: true})
    @ManyToOne(type => ParkingSpace)
    @JoinColumn()
    parkingSpace: ParkingSpace;
    @Field({nullable: true})
    @Column()
    date: string;
    @Field({nullable: true})
    @ManyToOne(type => BookingStatus)
    @JoinColumn()
    bookingStatus: BookingStatus;

}
