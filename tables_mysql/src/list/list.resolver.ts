import { Int, Resolver } from '@nestjs/graphql';
import { ListService } from './list.service';
import { ActionResponseType, ListType } from './list.types';
import { Mutation, Args, Query } from '@nestjs/graphql';
import { List } from './list.entity';
import { ActionsInputDto } from './dto/actionsInput.dto';
import { CreateListInputDto } from './dto/createlist.dto';
import { Sort } from './dto/get.arg';



@Resolver(() => ListType)
export class ListResolver {
    constructor(private readonly listService: ListService){}

        @Mutation(()=> ListType)
        async createList(
            @Args('actionInput') actionInput: ActionsInputDto,
            @Args('input') input: CreateListInputDto
        ): Promise<List>{
            return this.listService.createList(input)
        }


        @Query(()=> ActionResponseType )
        async getAllLists(
            @Args('sort_by') sort_by: string,
            @Args('order') order: Sort,
            @Args('page', { type: () => Int }) page: number,
            @Args('records_per_page', { type: () => Int }) records_per_page: number,
          ): Promise<ActionResponseType> {
            return  this.listService.getAllLists(sort_by, order, page, records_per_page);
          }

        
}
