import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class usertabl {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column()
  Bday!: string;

  @Column()
  Address!: string;
}
