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
    *getUsers({}, { call, put }: any) {},
  },
};
