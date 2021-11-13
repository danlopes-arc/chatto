import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id = 0;

  @Column({ type: String })
  username = '';

  @Column({ type: String })
  passwordHash = '';
}
