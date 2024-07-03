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
exports.ListResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const list_service_1 = require("./list.service");
const list_types_1 = require("./list.types");
const graphql_2 = require("@nestjs/graphql");
const actionsInput_dto_1 = require("./dto/actionsInput.dto");
const createlist_dto_1 = require("./dto/createlist.dto");
const get_arg_1 = require("./dto/get.arg");
let ListResolver = class ListResolver {
    constructor(listService) {
        this.listService = listService;
    }
    async createList(actionInput, input) {
        return this.listService.createList(input);
    }
    async getAllLists(sort_by, order, page, records_per_page) {
        return this.listService.getAllLists(sort_by, order, page, records_per_page);
    }
};
exports.ListResolver = ListResolver;
__decorate([
    (0, graphql_2.Mutation)(() => list_types_1.ListType),
    __param(0, (0, graphql_2.Args)('actionInput')),
    __param(1, (0, graphql_2.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [actionsInput_dto_1.ActionsInputDto,
        createlist_dto_1.CreateListInputDto]),
    __metadata("design:returntype", Promise)
], ListResolver.prototype, "createList", null);
__decorate([
    (0, graphql_2.Query)(() => list_types_1.ActionResponseType),
    __param(0, (0, graphql_2.Args)('sort_by')),
    __param(1, (0, graphql_2.Args)('order')),
    __param(2, (0, graphql_2.Args)('page', { type: () => graphql_1.Int })),
    __param(3, (0, graphql_2.Args)('records_per_page', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Number, Number]),
    __metadata("design:returntype", Promise)
], ListResolver.prototype, "getAllLists", null);
exports.ListResolver = ListResolver = __decorate([
    (0, graphql_1.Resolver)(() => list_types_1.ListType),
    __metadata("design:paramtypes", [list_service_1.ListService])
], ListResolver);
//# sourceMappingURL=list.resolver.js.map