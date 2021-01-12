import request from 'umi-request';
import { message } from 'antd';

export default {
  namespace: 'users',

  state: {
    users: [],
  },

  reducers: {
    save(state: any, { payload }: any) {
      return { ...state, ...payload };
    },
  },

  effects: {
    *getUsers({}, { call, put }: any) {
      const dataSource = yield request('/api/getUsers');

      yield put({
        type: 'save',
        payload: { users: dataSource },
      });
    },

    *getRemoteData({}, {}: any) {
      const remoteData = request(
        '/api/web201605/js/herolist.json',
      ).catch((errorInfo) => message.error(errorInfo.toString()));
      console.log('in getRemoteData', remoteData);
    },
  },

  subscriptions: {
    setup({ dispatch, history }: any) {
      return history.listen(({ pathname }: any) => {
        if (pathname.toLowerCase().includes('/')) {
          dispatch({
            type: 'getUsers',
          });

          dispatch({
            type: 'getRemoteData',
          });
        }
      });
    },
  },
};
