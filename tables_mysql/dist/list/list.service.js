"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const list_entity_1 = require("./list.entity");
const typeorm_2 = require("@nestjs/typeorm");
let ListService = class ListService {
    constructor(listRepository) {
        this.listRepository = listRepository;
    }
    async createList(input) {
        const list = await this.listRepository.create(input);
        return this.listRepository.save(list);
    }
    async getAllLists(sort_by, order, page, records_per_page) {
        try {
            const [data, total] = await this.listRepository.findAndCount({
                order: { [sort_by]: order },
                skip: (page - 1) * records_per_page,
                take: records_per_page,
            });
            return {
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
};
exports.ListService = ListService;
exports.ListService = ListService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(list_entity_1.List)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], ListService);
//# sourceMappingURL=list.service.js.map