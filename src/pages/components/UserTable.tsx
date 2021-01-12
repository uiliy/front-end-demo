import React from 'react';
import { Table, Divider, Popconfirm } from 'antd';

const dataSource = [
  {
    key: '1',
    name: '胡彦斌',
    age: 32,
    address: '西湖区湖底公园1号',
  },
  {
    key: '2',
    name: '胡彦祖',
    age: 42,
    address: '西湖区湖底公园1号',
  },
];

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

const UserTable: React.FC<{}> = ({}) => {
  return <Table dataSource={dataSource} columns={columns} />;
};

export default UserTable;
