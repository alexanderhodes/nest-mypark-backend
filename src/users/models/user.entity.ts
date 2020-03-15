import {Column, Entity, PrimaryColumn} from "typeorm";

@Entity()
export class User {

    @PrimaryColumn()
    id: string;
    @Column()
    name: string;
    @Column()
    password: string;
    @Column()
    username: string;
    @Column()
    firstName: string;
    @Column()
    lastName: string;
    @Column()
    enabled: boolean;
    @Column()
    privateEmail: string;
    @Column()
    parkingSpace: number;

}
