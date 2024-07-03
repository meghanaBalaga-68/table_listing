import { ListService } from './list.service';
import { ActionResponseType } from './list.types';
import { List } from './list.entity';
import { ActionsInputDto } from './dto/actionsInput.dto';
import { CreateListInputDto } from './dto/createlist.dto';
import { Sort } from './dto/get.arg';
export declare class ListResolver {
    private readonly listService;
    constructor(listService: ListService);
    createList(actionInput: ActionsInputDto, input: CreateListInputDto): Promise<List>;
    getAllLists(sort_by: string, order: Sort, page: number, records_per_page: number): Promise<ActionResponseType>;
}
