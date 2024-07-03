import { Sort } from "./get.arg";
export declare class ActionsInputDto {
    page: number;
    next_page: number;
    is_next_page: boolean;
    pages: number;
    records_per_page: number;
    total_records: number;
    sort_by: string;
    order: Sort;
}
