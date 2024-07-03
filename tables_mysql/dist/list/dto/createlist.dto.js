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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateListInputDto = void 0;
const graphql_1 = require("@nestjs/graphql");
const class_validator_1 = require("class-validator");
const list_types_1 = require("../list.types");
(0, graphql_1.registerEnumType)(list_types_1.Role, {
    name: 'Role',
});
(0, graphql_1.registerEnumType)(list_types_1.Shift, {
    name: 'Shift',
});
let CreateListInputDto = class CreateListInputDto {
};
exports.CreateListInputDto = CreateListInputDto;
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], CreateListInputDto.prototype, "firstName", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], CreateListInputDto.prototype, "LastName", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], CreateListInputDto.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], CreateListInputDto.prototype, "phoneNumber", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, class_validator_1.IsEnum)(list_types_1.Shift),
    __metadata("design:type", String)
], CreateListInputDto.prototype, "shift", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, class_validator_1.IsEnum)(list_types_1.Role),
    __metadata("design:type", String)
], CreateListInputDto.prototype, "role", void 0);
exports.CreateListInputDto = CreateListInputDto = __decorate([
    (0, graphql_1.InputType)()
], CreateListInputDto);
//# sourceMappingURL=createlist.dto.js.map