const users = [
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

export default {
  '/api/getUsers': { success: true, users },

  'POST /api/deleteUser': (req: any, res: any) => {
    const { userId } = req.body;
    res.send({
      success: true,
      users: users.filter((item: any) => item.key !== userId),
    });
  },
};
