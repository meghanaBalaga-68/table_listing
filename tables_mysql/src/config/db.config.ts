import { registerAs } from "@nestjs/config";
import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { List } from "src/list/list.entity";



export default registerAs('orm.config',(): TypeOrmModuleOptions   => ({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'list',
    entities: [List],
    synchronize: true,

}));