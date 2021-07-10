import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'diray' })
export class Diray {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'user' })
  user: string;

  @Column({ name: 'pid' })
  pid: string;

  @Column({ name: 'content' })
  content: string;

  @Column({ name: 'time' })
  time: string;
}
