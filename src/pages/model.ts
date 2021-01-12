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

      yield put({
        type: 'save',
        payload: { users: dataSource },
      });
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
