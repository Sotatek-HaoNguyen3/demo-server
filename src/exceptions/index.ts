import { permissionException } from './permission.exception';
import { userGroupPermissionException } from './user-group-permission.exception';
import { userGroupException } from './user-group.exception';

export const httpErrors = {
  ...permissionException,
  ...userGroupException,
  ...userGroupPermissionException,
};
