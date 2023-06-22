import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ConfigModule } from "@nestjs/config";
import { UsersModule } from "./users/users.module";
import { PrismaService } from "./prisma/prisma.service";
import { PrismaModule } from "./prisma/prisma.module";
import Config from "./config/ConfigSchema";

@Module({
    imports: [
        UsersModule,
        PrismaModule,
        ConfigModule.forRoot({
            isGlobal: true,
            load: [Config],
        }),
    ],
    controllers: [AppController],
    providers: [AppService, PrismaService],
})
export class AppModule {}