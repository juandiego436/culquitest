import { ExchangeRate } from "src/exchange-rates/exchange-rate.entity"
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Change {
    @PrimaryGeneratedColumn()
    id:number

    @ManyToOne(() => ExchangeRate, (tipo) => tipo.tipos)
    tipo:ExchangeRate

    @Column({type: 'decimal', default: '0.00'})
    monto:number

    @Column({type: 'decimal', default: '0.00'})
    montoTipoCambio:number

    @Column()
    monedaOrigen:string

    @Column()
    monedaDestino:string

    @Column({nullable:true})
    userCreate:number

    @Column({nullable:true})
    userUpdate:number
    
    @Column({type : 'datetime', default: () => 'CURRENT_TIMESTAMP'})
    created:Date

    @Column({type : 'datetime', default: () => 'CURRENT_TIMESTAMP'})
    updated:Date
}