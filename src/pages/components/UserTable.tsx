import React from 'react';
import { Table, Divider, Popconfirm } from 'antd';

const columns = [
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: '住址',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: '操作',
    key: 'actions',
    render: (text: any, record: any) => (
      <div>
        <Popconfirm
          title="确定删除此行吗？"
          onConfirm={() => console.log('TODO: 删除')}
        >
          <a>删除</a>
        </Popconfirm>
        <Divider type="vertical" />
        <a onClick={() => console.log('TODO: 编辑')}>编辑</a>
      </div>
    ),
  },
];

const UserTable: React.FC<{ dataSource: any }> = ({ dataSource }) => {
  return <Table dataSource={dataSource} columns={columns} />;
};

export default UserTable;
