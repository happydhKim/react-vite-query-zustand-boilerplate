import { rest } from 'msw';

export const handlers = () => {
  return [
    rest.get('/api/user', getUserInformation),
    rest.get('/api/first', getFirstInfo),
    rest.get('/api/second', getSecondInfo),
    rest.get('/api/third', getThirdInfo),
    rest.get('/api/fourth', getFourthInfo),
  ];
};
const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const getUserInformation: Parameters<typeof rest.get>[1] = (_, res, ctx) => {
  sleep(1000);
  return res(
    ctx.status(200),
    ctx.json({
      name: '김도현',
      age: 7,
    })
  );
};

const getFirstInfo: Parameters<typeof rest.get>[1] = async (req, res, ctx) => {
  await sleep(1000);
  return Math.random() < 0.5
    ? res(
        ctx.status(200),
        ctx.json({
          depth: 1,
          description: '첫 번째 테스트....',
        })
      )
    : res(ctx.status(500));
};

const getSecondInfo: Parameters<typeof rest.get>[1] = async (req, res, ctx) => {
  await sleep(1000);
  return Math.random() < 0.5
    ? res(
        ctx.status(200),
        ctx.json({
          depth: 1,
          description: '두 번째 테스트....',
        })
      )
    : res(ctx.status(500));
};

const getThirdInfo: Parameters<typeof rest.get>[1] = async (req, res, ctx) => {
  await sleep(1000);
  return Math.random() < 0.5
    ? res(
        ctx.status(200),
        ctx.json({
          depth: 1,
          description: '세 번째 테스트....',
        })
      )
    : res(ctx.status(500));
};

const getFourthInfo: Parameters<typeof rest.get>[1] = async (req, res, ctx) => {
  await sleep(1000);
  return Math.random() < 0.5
    ? res(
        ctx.status(200),
        ctx.json({
          depth: 1,
          description: '네 번째 테스트....',
        })
      )
    : res(ctx.status(500));
};
