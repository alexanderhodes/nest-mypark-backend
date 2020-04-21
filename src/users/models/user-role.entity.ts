import {Role} from "./role.entity";
import {User} from "./user.entity";
import {Field, ObjectType} from "@nestjs/graphql";
import {Entity, JoinColumn, OneToOne, PrimaryColumn} from "typeorm";

@ObjectType()
@Entity({name: "userroles"})
export class UserRole {

    @PrimaryColumn()
    id: string;
    @Field()
    @OneToOne(type => User)
    @JoinColumn()
    user: User;
    @Field()
    @OneToOne(type => Role)
    @JoinColumn()
    role: Role;

}
