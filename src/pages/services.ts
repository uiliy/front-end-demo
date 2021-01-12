import request from 'umi-request';
import { message } from 'antd';

const query = (params: any) => {
  const { api, body, requestType, origin } = params;
  const options: any = Object.assign(
    {
      credentials: 'include',
      method: `${requestType}`,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json; charset=utf-8',
      },
    },
    body ? { body: JSON.stringify(body) } : {},
  );

  return request(api, options).catch((error: any) =>
    message.error(`请求异常：${error}`),
  );
};
