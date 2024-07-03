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
exports.List = void 0;
const typeorm_1 = require("typeorm");
const list_types_1 = require("./list.types");
let List = class List {
    generateEmpId() {
        this.empId = 'EMP' + Math.floor(Math.random() * 100000).toString().padStart(4, '0');
    }
};
exports.List = List;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], List.prototype, "list_id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], List.prototype, "firstName", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], List.prototype, "LastName", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", String)
], List.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], List.prototype, "phoneNumber", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], List.prototype, "empId", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: list_types_1.Shift,
        default: list_types_1.Shift.MORNING
    }),
    __metadata("design:type", String)
], List.prototype, "shift", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: list_types_1.Role,
        default: list_types_1.Role.WORKER
    }),
    __metadata("design:type", String)
], List.prototype, "role", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'timestamp',
        default: () => 'NOW()'
    }),
    __metadata("design:type", Date)
], List.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.BeforeInsert)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], List.prototype, "generateEmpId", null);
exports.List = List = __decorate([
    (0, typeorm_1.Entity)('list')
], List);
//# sourceMappingURL=list.entity.js.map