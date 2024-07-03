import { Injectable } from '@nestjs/common';
import { IntegerType, Repository } from 'typeorm';

import { CreateListInputDto } from './dto/createlist.dto';
import { List } from './list.entity';

import { InjectRepository } from '@nestjs/typeorm';
import { Sort } from './dto/get.arg';

@Injectable()
export class ListService {
    constructor(
        @InjectRepository(List)
        private readonly listRepository: Repository<List>) { }


    async createList(input: CreateListInputDto): Promise<List> {

        // const list = new List();
        // list.firstName = input.firstName;
        // list.LastName = input.LastName;
        // list.email = input.email;
        // list.phoneNumber = input.phoneNumber;
        // list.shift = input.shift;
        // list.role = input.role;
        const list = await this.listRepository.create(input);
        return this.listRepository.save(list);

    }


    async getAllLists(
        sort_by: string,
        order: Sort,
        page: number,
        records_per_page: number,

    ): Promise<any> {
       try{
        const [data, total] = await this.listRepository.findAndCount({
            order: {[sort_by]: order},
            skip: (page-1) * records_per_page,
            take: records_per_page,
        });



        return  {
            page,
            next_page: page + 1,
            is_next_page: total > page * records_per_page,
            pages: Math.ceil(total / records_per_page),
            records_per_page,
            total_records: total,
            sort_by,
            order,
            data,
          };
       }
       catch (error) {
         throw new Error(`Invalid sort_by: ${sort_by} field. Please enter proper field type in the ListType`);
       }
    }
}
