import {Entity, PrimaryColumn} from "typeorm";
import {Field, ID, ObjectType} from "@nestjs/graphql";

@ObjectType()
@Entity({name: "role"})
export class Role {

    @Field(type => ID)
    @PrimaryColumn()
    name: string;

}
