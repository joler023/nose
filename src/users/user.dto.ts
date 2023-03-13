import { ApiProperty } from "@nestjs/swagger";

export class UserDTO {
    
    id: number;

    @ApiProperty()
    readonly name: string;

    @ApiProperty()
    email: string;

    @ApiProperty()
    password: string;

    constructor(id: number, name: string, email: string, password: string) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
    }
}