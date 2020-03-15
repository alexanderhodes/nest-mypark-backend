import {Field, ID, ObjectType} from "@nestjs/graphql";
import {Column, Entity, PrimaryColumn} from "typeorm";

@ObjectType()
@Entity({name: "seriesabsence"})
export class SeriesAbsence {

    @Field(type => ID)
    @PrimaryColumn()
    id: string;
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
