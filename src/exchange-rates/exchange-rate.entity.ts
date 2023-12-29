import { Change } from "src/changes/changes.entity"
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class ExchangeRate {
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    tipo:string

    @Column({type: 'decimal', default: '0.00'})
    cambio:number

    @Column({nullable:true})
    userCreate:number

    @Column({nullable:true})
    userUpdate:number
    
    @Column({type : 'datetime', default: () => 'CURRENT_TIMESTAMP'})
    created:Date

    @Column({type : 'datetime', default: () => 'CURRENT_TIMESTAMP'})
    updated:Date

    @OneToMany(() => Change, (change) => change.tipo, {nullable: true})
    tipos: Change[]
}
