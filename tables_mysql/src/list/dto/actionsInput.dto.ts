import { InputType, Field, registerEnumType} from "@nestjs/graphql";
import { Int } from "@nestjs/graphql";
import { Sort } from "./get.arg";
import { IsEnum } from "class-validator";
registerEnumType(Sort, {
    name: 'Sort',
});


@InputType()
export class ActionsInputDto{
    @Field(type => Int)
    page: number;

    @Field(type => Int)
    next_page: number;

    @Field()
    is_next_page: boolean;

    @Field(type => Int)
    pages: number;


    @Field(type => Int)
    records_per_page: number;

    @Field(type => Int)
    total_records: number;

    @Field()
    sort_by: string;

    @Field()
    @IsEnum(Sort)
    order: Sort;

}