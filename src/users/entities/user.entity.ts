import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('users')
export class UserEntity {

    @PrimaryGeneratedColumn()
    userId: number;

    @Column({nullable: false})
    name: string;

    @Column({unique: true, nullable: false})
    email: string

    @Column({nullable: false})
    password: string

    constructor(userId: number, name: string, email: string, password: string) {
        this.userId = userId;
        this.name = name;
        this.email = email;
        this.password = password;
        console.log('Creo User Entity para ' + this.name);
    }

}