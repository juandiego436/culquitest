import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExchangeRatesModule } from 'src/exchange-rates/exchange-rates.module';
import { ChangesController } from './changes.controller';
import { Change } from './changes.entity';
import { ChangesService } from './changes.service';

@Module({
  imports: [TypeOrmModule.forFeature([Change]), ExchangeRatesModule],
  controllers: [ChangesController],
  providers: [ChangesService],
})
export class ChangesModule {}
