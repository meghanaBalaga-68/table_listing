import { Repository } from 'typeorm';
import { CreateListInputDto } from './dto/createlist.dto';
import { List } from './list.entity';
import { Sort } from './dto/get.arg';
export declare class ListService {
    private readonly listRepository;
    constructor(listRepository: Repository<List>);
    createList(input: CreateListInputDto): Promise<List>;
    getAllLists(sort_by: string, order: Sort, page: number, records_per_page: number): Promise<any>;
}
