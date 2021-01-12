import React from 'react';
import { connect } from 'dva';
import UserTable from '@/pages/components/UserTable';

const Users: React.FC<{ dispatch: any; users: any }> = ({
  dispatch,
  users,
}) => {
  console.log(users);

  const handleDeleteUser = (userId: any) => {
    dispatch({
      type: 'users/deleteUser',
      payload: { userId },
    });
  };

  return (
    <div>
      <UserTable dataSource={users} handleDeleteUser={handleDeleteUser} />
    </div>
  );
};

const mapStateToProps = (state: any) => {
  const { users } = state.users;

  return { users };
};

export default connect(mapStateToProps)(Users);
