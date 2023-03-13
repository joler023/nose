import { ApiProperty } from "@nestjs/swagger";

export class UserDTO {
    @ApiProperty()
    id?: number;

    @ApiProperty()
    readonly name: string;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }
}