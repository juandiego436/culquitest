import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { CreateExchangeDTO } from './dto/createExchange.dto';
import { ExchangeRatesService } from './exchange-rates.service';

@Controller('exchange-rates')
export class ExchangeRatesController {

    constructor(private exchangeRateService : ExchangeRatesService){}

    @Get('/')
    exchangeRateAll(){
        return this.exchangeRateService.getExchangeAll();
    }

    @Post('/registro')
    createExchangeRate(@Body() newExchange : CreateExchangeDTO ){
        return this.exchangeRateService.createExchange(newExchange);
    }

    @Get('/:tipo')
    exchangeRateTipo(@Param('tipo') tipo: string){
        return this.exchangeRateService.getExchangeRate(tipo);
    }

    @Put('/:id')
    updateExchangeRate(@Param('id') id:number, @Body() exchange: CreateExchangeDTO){
        return this.exchangeRateService.updateExchange(id,exchange);
    }
}
