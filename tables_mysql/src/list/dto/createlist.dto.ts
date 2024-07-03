import { InputType, Field, registerEnumType, Int } from "@nestjs/graphql";
import { IsEnum, IsString, IsNotEmpty, IsNumber, IsEmail } from "class-validator";
import { Role, Shift } from "../list.types";


registerEnumType(Role, {
    name: 'Role',
});

registerEnumType(Shift, {
    name: 'Shift',
});


@InputType()
export class CreateListInputDto{
    @Field()
    firstName: string;

    @Field()
    LastName: string;

    @Field()
    email: string;

    @Field(() => String)
    phoneNumber: string;

    @Field()
    @IsEnum(Shift)
    shift: Shift;

    @Field()
    @IsEnum(Role)
    role: Role;
}