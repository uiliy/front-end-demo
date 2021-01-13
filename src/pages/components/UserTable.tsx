import React, { useState, useEffect } from 'react';
import { Table, Divider, Popconfirm } from 'antd';
import Highlighter from 'react-highlight-words';
import styles from '@/pages/index.less';

const UserTable: React.FC<{
  dataSource: any;
  handleDeleteUser: any;
  searchValue: any;
}> = ({ dataSource, handleDeleteUser, searchValue }) => {
  const [filteredDataSource, setFilteredDataSource] = useState([]);

  useEffect(() => {
    const filteredDataSource = dataSource.filter((item: any) => {
      searchValue = searchValue.toLowerCase();

      return (
        item.name.toLowerCase().includes(searchValue) ||
        item.age.toString().includes(searchValue) ||
        item.address.toLowerCase().includes(searchValue)
      );
    });
    setFilteredDataSource(filteredDataSource);
  }, [dataSource, searchValue]);

  const render = (text: any) => (
    <Highlighter
      highlightClassName={styles.highlighter}
      searchWords={[searchValue]}
      autoEscape={true}
      textToHighlight={text.toString() || ''}
    />
  );

  const columns = [
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
      render: render,
    },
    {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
      render: render,
    },
    {
      title: '住址',
      dataIndex: 'address',
      key: 'address',
      render: render,
    },
    {
      title: '操作',
      key: 'actions',
      render: (text: any, record: any) => (
        <div>
          <Popconfirm
            title="确定删除此行吗？"
            onConfirm={() => handleDeleteUser(record.key)}
          >
            <a>删除</a>
          </Popconfirm>
          <Divider type="vertical" />
          <a onClick={() => console.log('TODO: 编辑')}>编辑</a>
        </div>
      ),
    },
  ];

  return <Table dataSource={filteredDataSource} columns={columns} />;
};

export default UserTable;
