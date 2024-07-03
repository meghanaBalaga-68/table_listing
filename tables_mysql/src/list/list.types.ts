import { ObjectType, Field, ID, registerEnumType, Int } from "@nestjs/graphql";
import { List } from "./list.entity";
export enum Sort {
    ASC = "ASC",
    DESC = "DESC"
}
registerEnumType(Sort, {
    name: 'Sort',
});


export enum Role{
    ADMIN = "Admin",
    WORKER = "Worker",
    SUPERVISOR = "Supervisor"
}
registerEnumType(Role, {
    name: 'Role',
})


export enum Shift{
    MORNING = "Morning",
    AFTERNOON = "Afternoon",
    EVENING   = "Evening",
    NIGHT     = "Night"
}

registerEnumType(Shift, { name: 'Shift', })

@ObjectType()
export class ListType{
    @Field(() => ID)
    list_id: string;

    @Field(() => String)
    firstName?: string;

    @Field(() => String)
    LastName?: string;

    @Field(() => String)
    email: string;

    @Field(() => String)
    phoneNumber: string;

    @Field(() => String)
    empId: string;

    @Field(() => String)
    shift: Shift;

    @Field(() => Role)
    role: Role;

    @Field()
    created_at: Date;

}

// @ObjectType()
// export class GetAllListType{
//     @Field(() => ID)
//     list_id: string;

    

//     @Field(() => String, {nullable: true})
//     LastName?: string;

//     @Field()
//     created_at: Date;
// }

@ObjectType()
export class ActionResponseType{
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

    @Field(()=> String)
    sort_by: string;

    @Field(() => Sort)
    order: Sort;

    @Field(() => [ListType])
    data: ListType[];
}
