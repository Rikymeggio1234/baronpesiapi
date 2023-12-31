import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, JoinColumn, Index } from "typeorm";

// Create entity ORM to map the table cards
@Entity("cards")
export class CardORM extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Index()
    @Column({type: "varchar", length: 30})
    cardCode: string

    @Column({type: "char", length: 4})
    numberCard: string

    @Column({type: "varchar", length: 20})
    vehicle: string

    @Column({type: "varchar", length: 10})
    plate: string

    @Column({type: "int"})
    tare: number

    @Column({type: "int", nullable: true})
    @JoinColumn({ name: 'subjectId' })
    subjectId: number | null;

    @Column({type: "int", nullable: true})
    @JoinColumn({ name: 'installationId' })
    installationId: number | null;  
}