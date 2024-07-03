import { IsEnum} from 'class-validator';
import { Field, registerEnumType, ArgsType} from '@nestjs/graphql';
export enum Sort {
    ASC = "ASC",
    DESC = "DESC"
}
registerEnumType(Sort, {
    name: 'Sort',
});

@ArgsType()
export class GetArgList {
    @Field({nullable: true})
    @IsEnum(Sort)
    sort?: string;
}