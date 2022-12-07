import { rest } from 'msw';

export const authRequests = (msw: typeof rest) => [
  msw.post(mockServerApi('/auth/login'), (req, res, ctx) => {
    // TODO => Login logic (Success / Fail)
    return res(
      ctx.status(200),
      ctx.json({ token: '123', expiresIn: 86400 }),
      ctx.body(JSON.stringify({}))
    )
  }),
];

export default authRequests;
