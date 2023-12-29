import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChangesModule } from './changes/changes.module';
import { ExchangeRatesModule } from './exchange-rates/exchange-rates.module';
import { UsersModule } from './users/users.module';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'Admin',
      password: 'Lgoptimusg3',
      database: 'change',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true
    }),
    ChangesModule,UsersModule, ExchangeRatesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
