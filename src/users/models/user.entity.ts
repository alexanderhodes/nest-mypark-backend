import {Column, Entity, JoinColumn, OneToOne, PrimaryColumn} from "typeorm";
import {Field, ID, ObjectType} from "@nestjs/graphql";
import {ParkingSpace} from "./parking-space.entity";

@ObjectType()
@Entity({name: "users"})
export class User {

    @Field(type => ID,  { nullable: true })
    @PrimaryColumn()
    id: string;
    @Field( { nullable: true })
    @Column()
    name: string;
    @Field( { nullable: true })
    @Column()
    password: string;
    @Field( { nullable: true })
    @Column()
    username: string;
    @Field({nullable: true})
    @Column({nullable: true, name: "first_name"})
    firstName: string;
    @Field({nullable: true})
    @Column({nullable: true, name: "last_name"})
    lastName: string;
    @Field( { nullable: true })
    @Column()
    enabled: boolean;
    @Field({nullable: true})
    @Column({nullable: true, name: "private_email"})
    privateEmail: string;
    @Field({nullable: true})
    @OneToOne(type => ParkingSpace, { cascade: true })
    @JoinColumn({name: "parkingSpaceId", referencedColumnName: "id"})
    parkingSpace: ParkingSpace;

}
