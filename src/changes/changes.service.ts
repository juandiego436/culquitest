import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ExchangeRate } from 'src/exchange-rates/exchange-rate.entity';
import { ExchangeRatesService } from 'src/exchange-rates/exchange-rates.service';
import { Repository } from 'typeorm';
import { Change } from './changes.entity';
import { ChangesDto } from './dto/changes-dto';
import { CreateChangeDTO } from './dto/createchange.dto';

@Injectable()
export class ChangesService {

    constructor(@InjectRepository(Change) private changeRepository: Repository<Change>,
    private exchangeRatesService : ExchangeRatesService){}

    createChange(change: CreateChangeDTO){
        console.log(change);
        let exchange: ExchangeRate = null; 
        let exch:number = 0;
        if(exchange === null){
            this.exchangeRatesService.getExchangeRate(change.monedaDestino).then(res => {
                exchange=res;
                exch=res.cambio;
                console.log(exchange);
            });
        }
        console.log(exchange);
        let entity : ChangesDto = {
            monto:change.monto,
            tipo:exchange,
            monedaDestino:change.monedaDestino,
            monedaOrigen:change.monedaOrigen,
            montoTipoCambio: change.monto * exch,
            userCreate:1,
            userUpdate:1
        }
        
        console.log(entity);
        const newChange = this.changeRepository.create(entity);
        console.log(newChange);
        return this.changeRepository.save(newChange);
    }
}
