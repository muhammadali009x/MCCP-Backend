"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeORMConfig = void 0;
exports.typeORMConfig = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'formsdb',
    entities: ['dist/**/*.entity{.ts,.js}'],
    synchronize: true
};
//# sourceMappingURL=typeORM.config.js.map