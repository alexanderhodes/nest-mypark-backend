import {User} from "./user.entity";
import {Field, ID, ObjectType} from "@nestjs/graphql";
import {Column, Entity, JoinColumn, ManyToOne, PrimaryColumn} from "typeorm";

@ObjectType()
@Entity({name: 'seriesbooking'})
export class SeriesBooking {

    @Field(type => ID)
    @PrimaryColumn()
    id: string;
    @Field()
    @ManyToOne(type => User)
    @JoinColumn()
    user: User;
    @Field()
    @Column()
    active: boolean;
    @Field()
    @Column()
    time: string;
    @Field()
    @Column()
    weekday: number;
}
