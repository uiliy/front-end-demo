import React, { useState } from 'react';
import { connect } from 'dva';
import UserTable from '@/pages/components/UserTable';
import { Row, Col, Input } from 'antd';

const Users: React.FC<{ dispatch: any; users: any }> = ({
  dispatch,
  users,
}) => {
  const [searchValue, setSearchValue] = useState('');

  const handleDeleteUser = (userId: any) => {
    dispatch({
      type: 'users/deleteUser',
      payload: { userId },
    });
  };

  const handleChange = (e: any) => {
    console.log(e.target.value);
    setSearchValue(e.target.value);
  };

  return (
    <div>
      <Row gutter={[0, 16]}>
        <Col span={10}>
          <Input.Search
            placeholder="模糊搜索"
            autoFocus
            allowClear
            enterButton
            onChange={handleChange}
          ></Input.Search>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <UserTable dataSource={users} handleDeleteUser={handleDeleteUser} />
        </Col>
      </Row>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  const { users } = state.users;

  return { users };
};

export default connect(mapStateToProps)(Users);
