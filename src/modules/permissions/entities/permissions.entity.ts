import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { UserGroupPermission } from '../../user-group-permissions/entities/user-group-permissions.entity';

@Entity('permissions')
export class Permission extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'key', type: 'varchar', length: 255, nullable: false })
  key: string;

  @Column({ name: 'description', type: 'text', nullable: true })
  description: string;

  @Column({ name: 'updated_by', type: 'integer', width: 11, nullable: true })
  updatedBy: number;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @OneToMany(
    () => UserGroupPermission,
    (userGroupPermission) => userGroupPermission.permission,
  )
  userGroupPermissions: UserGroupPermission[];
}
