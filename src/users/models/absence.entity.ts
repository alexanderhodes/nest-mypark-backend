import {Column, Entity, JoinColumn, ManyToOne, PrimaryColumn} from "typeorm";
import {Field, ID, ObjectType} from "@nestjs/graphql";
import {User} from "./user.entity";

@ObjectType()
@Entity({name: "absences"})
export class Absence {

    @Field(type => ID)
    @PrimaryColumn()
    id: string;
    @Field()
    @ManyToOne(type => User)
    @JoinColumn()
    user: User;
    @Field()
    @Column()
    start: string;
    @Field()
    @Column()
    end: string;

}
