import {Field, ID, ObjectType} from "@nestjs/graphql";
import {Column, Entity, JoinColumn, ManyToOne, PrimaryColumn} from "typeorm";
import {User} from "./user.entity";

@ObjectType()
@Entity({name: "seriesabsence"})
export class SeriesAbsence {

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
    weekday: number;
}
