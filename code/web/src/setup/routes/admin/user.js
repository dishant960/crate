// App Imports
import UsersList from '../../../modules/admin/users/List'
import params from '../../../setup/config/params'


// Admin user routes
export const userList = {
  path: '/admin/users',
  component: UsersList,
  auth: true,
  role: params.user.roles.admin
}