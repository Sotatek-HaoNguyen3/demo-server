import { UserGroup } from '../../user-groups/entities/user-groups.entity';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('users')
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    name: 'group_id',
    type: 'integer',
    width: 11,
    nullable: false,
  })
  groupId: number;

  @Column({ name: 'username', type: 'varchar', length: 255, nullable: true })
  username: string;

  @Column({ name: 'email', type: 'varchar', length: 255, unique: true })
  email: string;

  @Column({ name: 'password', type: 'text', nullable: false, select: false })
  password: string;

  @Column({ name: 'updated_by', type: 'integer', width: 11, nullable: true })
  updatedBy: number;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @ManyToOne(() => UserGroup, (userGroup) => userGroup.users)
  @JoinColumn({ name: 'group_id' })
  userGroup: UserGroup;
}
