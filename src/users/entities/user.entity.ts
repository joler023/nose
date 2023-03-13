import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('users')
export class UserEntity {

    @PrimaryGeneratedColumn("uuid")
    userId: number;

    @Column({
        unique: true
    })
    readonly name: string;

    constructor(userId: number, name: string) {
        this.userId = userId;
        this.name = name;
        console.log('Creo User Entity para ' + this.name);
    }

}