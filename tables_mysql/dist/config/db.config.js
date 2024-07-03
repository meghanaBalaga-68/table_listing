"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("@nestjs/config");
const list_entity_1 = require("../list/list.entity");
exports.default = (0, config_1.registerAs)('orm.config', () => ({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'list',
    entities: [list_entity_1.List],
    synchronize: true,
}));
//# sourceMappingURL=db.config.js.map