import request from 'umi-request';
import { message } from 'antd';

const query = (params: any) => {
  const { api, body, requestType } = params;
  const options: any = Object.assign(
    {
      method: requestType,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json; charset=utf-8',
      },
    },
    body ? { body: JSON.stringify(body) } : {},
  );

  return request(api, options).catch((errorInfo) =>
    message.error(errorInfo.toString()),
  );
};

export { query };
