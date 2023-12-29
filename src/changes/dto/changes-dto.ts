import { ExchangeRate } from "src/exchange-rates/exchange-rate.entity";

export class ChangesDto {
    tipo:ExchangeRate
    monto:number
    montoTipoCambio:number
    monedaOrigen:string
    monedaDestino:string
    userCreate:number
    userUpdate:number
}
