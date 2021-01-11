import React from 'react';
import { ConfigProvider } from 'antd';
import cn from 'antd/es/locale/zh_CN';
import styles from './index.less';

const BasicLayout: React.FC<{}> = ({ children }) => {
  return (
    <ConfigProvider locale={cn}>
      <div className={styles.layout}>{children}</div>
    </ConfigProvider>
  );
};

export default BasicLayout;
