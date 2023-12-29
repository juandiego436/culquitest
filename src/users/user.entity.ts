import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id:number

    @Column({unique: true})
    name:string

    @Column()
    password:string

    @Column({type : 'datetime', default: () => 'CURRENT_TIMESTAMP'})
    created:Date

    @Column({type : 'datetime', default: () => 'CURRENT_TIMESTAMP'})
    updated:Date

    @Column({nullable: true})
    token:string
}