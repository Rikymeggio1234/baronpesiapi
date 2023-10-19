import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, Index } from "typeorm"

@Entity("subjects")
export class SubjectORM extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Index()
    @Column({type: "varchar", length: 50})
    socialReason: string;

    @Column({type: "int", width: 9})
    telephoneNumber: number;

    @Column({type: "varchar", length: 30})
    CFPIVA: string
}