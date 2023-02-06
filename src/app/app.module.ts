import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { DataSource } from 'typeorm'

import { AppController } from './controllers/app.controller'
import { UserController } from './controllers/user.controller'

import { AppService } from './services/app.service'
import { UserService } from './services/user.service'

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: process.env.MYSQL_HOST,
            port: 3306,
            username: 'root',
            password: process.env.MYSQL_ROOT_PASSWORD,
            database: process.env.MYSQL_DATABASE,
            entities: [],
            synchronize: false,
        }),
    ],
    controllers: [AppController, UserController],
    providers: [AppService, UserService],
})
export class AppModule {
    constructor(private readonly dataSource: DataSource) {}
}
