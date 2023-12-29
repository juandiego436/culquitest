import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateExchangeDTO } from './dto/createExchange.dto';
import { ExchangeRate } from './exchange-rate.entity';

@Injectable()
export class ExchangeRatesService {

    constructor(@InjectRepository(ExchangeRate) private exchangeRateRepository: Repository<ExchangeRate>){}

    createExchange(exchange: CreateExchangeDTO){
        const newExchange = this.exchangeRateRepository.create(exchange)
        return this.exchangeRateRepository.save(newExchange);
    }

    getExchangeAll(){
        return this.exchangeRateRepository.find();
    }

    public async getExchangeRate(tipo:string) : Promise<ExchangeRate | null> {
        return this.exchangeRateRepository.findOne({
            where: {
                tipo: tipo
            }
        }).then(res => res);
    }

    async updateExchange(id:number, exchange: CreateExchangeDTO){
        return this.exchangeRateRepository.update(id,exchange);
    }
}
