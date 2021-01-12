import { message } from 'antd';
import { query } from '@/pages/services';

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
      const res = yield call(query, {
        api: '/api/getUsers',
        requestType: 'GET',
      });

      if (res && res.users) {
        yield put({
          type: 'save',
          payload: { users: res.users },
        });
      }
    },

    *deleteUser({ payload }: any, { call, put }: any) {
      const { userId } = payload;
      const res = yield call(query, {
        api: '/api/deleteUser',
        requestType: 'POST',
        body: {
          userId,
        },
      });

      if (res && res.success) {
        yield put({
          type: 'save',
          payload: { users: res.users },
        });
        message.success('删除成功');
      } else {
        message.success('删除失败');
      }
    },
  },

  subscriptions: {
    setup({ dispatch, history }: any) {
      return history.listen(({ pathname }: any) => {
        if (pathname.toLowerCase().includes('/')) {
          dispatch({
            type: 'getUsers',
          });
        }
      });
    },
  },
};
