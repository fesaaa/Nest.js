import { ApiProperty } from "@nestjs/swagger";
export class CreateUserDto {
    @ApiProperty({description:"allow null"})
    id?:number;
    @ApiProperty()
    firstname: string;
    @ApiProperty()
    lastname: string;
    @ApiProperty()
    email: string;
}
