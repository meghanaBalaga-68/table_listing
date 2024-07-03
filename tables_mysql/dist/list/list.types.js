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
exports.ActionResponseType = exports.ListType = exports.Shift = exports.Role = exports.Sort = void 0;
const graphql_1 = require("@nestjs/graphql");
var Sort;
(function (Sort) {
    Sort["ASC"] = "ASC";
    Sort["DESC"] = "DESC";
})(Sort || (exports.Sort = Sort = {}));
(0, graphql_1.registerEnumType)(Sort, {
    name: 'Sort',
});
var Role;
(function (Role) {
    Role["ADMIN"] = "Admin";
    Role["WORKER"] = "Worker";
    Role["SUPERVISOR"] = "Supervisor";
})(Role || (exports.Role = Role = {}));
(0, graphql_1.registerEnumType)(Role, {
    name: 'Role',
});
var Shift;
(function (Shift) {
    Shift["MORNING"] = "Morning";
    Shift["AFTERNOON"] = "Afternoon";
    Shift["EVENING"] = "Evening";
    Shift["NIGHT"] = "Night";
})(Shift || (exports.Shift = Shift = {}));
(0, graphql_1.registerEnumType)(Shift, { name: 'Shift', });
let ListType = class ListType {
};
exports.ListType = ListType;
__decorate([
    (0, graphql_1.Field)(() => graphql_1.ID),
    __metadata("design:type", String)
], ListType.prototype, "list_id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], ListType.prototype, "firstName", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], ListType.prototype, "LastName", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], ListType.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], ListType.prototype, "phoneNumber", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], ListType.prototype, "empId", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], ListType.prototype, "shift", void 0);
__decorate([
    (0, graphql_1.Field)(() => Role),
    __metadata("design:type", String)
], ListType.prototype, "role", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Date)
], ListType.prototype, "created_at", void 0);
exports.ListType = ListType = __decorate([
    (0, graphql_1.ObjectType)()
], ListType);
let ActionResponseType = class ActionResponseType {
};
exports.ActionResponseType = ActionResponseType;
__decorate([
    (0, graphql_1.Field)(type => graphql_1.Int),
    __metadata("design:type", Number)
], ActionResponseType.prototype, "page", void 0);
__decorate([
    (0, graphql_1.Field)(type => graphql_1.Int),
    __metadata("design:type", Number)
], ActionResponseType.prototype, "next_page", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Boolean)
], ActionResponseType.prototype, "is_next_page", void 0);
__decorate([
    (0, graphql_1.Field)(type => graphql_1.Int),
    __metadata("design:type", Number)
], ActionResponseType.prototype, "pages", void 0);
__decorate([
    (0, graphql_1.Field)(type => graphql_1.Int),
    __metadata("design:type", Number)
], ActionResponseType.prototype, "records_per_page", void 0);
__decorate([
    (0, graphql_1.Field)(type => graphql_1.Int),
    __metadata("design:type", Number)
], ActionResponseType.prototype, "total_records", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], ActionResponseType.prototype, "sort_by", void 0);
__decorate([
    (0, graphql_1.Field)(() => Sort),
    __metadata("design:type", String)
], ActionResponseType.prototype, "order", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ListType]),
    __metadata("design:type", Array)
], ActionResponseType.prototype, "data", void 0);
exports.ActionResponseType = ActionResponseType = __decorate([
    (0, graphql_1.ObjectType)()
], ActionResponseType);
//# sourceMappingURL=list.types.js.map