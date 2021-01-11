import React from 'react';
import { ConfigProvider } from 'antd';
import cn from 'antd/es/locale/zh_CN';

const BasicLayout: React.FC<{}> = ({ children }) => {
  return <ConfigProvider locale={cn}>{children}</ConfigProvider>;
};

export default BasicLayout;
