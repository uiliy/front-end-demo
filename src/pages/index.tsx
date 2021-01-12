import React from 'react';
import { connect } from 'dva';
import UserTable from '@/pages/components/UserTable';

const Users: React.FC<{ dispatch: any; users: any }> = ({
  dispatch,
  users,
}) => {
  console.log(users);

  return (
    <div>
      <UserTable dataSource={users} />
    </div>
  );
};

const mapStateToProps = (state: any) => {
  const { users } = state.users;

  return { users };
};

export default connect(mapStateToProps)(Users);
