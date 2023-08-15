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
import { Permission } from '../../permissions/entities/permissions.entity';
import { UserGroup } from '../../user-groups/entities/user-groups.entity';

@Entity()
export class UserGroupPermission extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    name: 'user_group_id',
    type: 'integer',
    width: 11,
    nullable: false,
  })
  userGroupId: number;

  @Column({
    name: 'permission_id',
    type: 'integer',
    width: 11,
    nullable: false,
  })
  permissionId: number;

  @Column({ name: 'description', type: 'text', nullable: true })
  description: string;

  @Column({ name: 'updated_by', type: 'integer', width: 11, nullable: true })
  updatedBy: number;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @ManyToOne(
    () => Permission,
    (permission) => permission.userGroupPermissions,
    {
      eager: true,
    },
  )
  @JoinColumn({ name: 'permission_id' })
  permission: Permission;

  @ManyToOne(() => UserGroup, (userGroup) => userGroup.userGroupPermissions)
  @JoinColumn({ name: 'user_group_id' })
  userGroup: UserGroup;
}
