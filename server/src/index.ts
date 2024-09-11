import { Hono } from 'hono';
import { faker } from '@faker-js/faker';
import { cors } from 'hono/cors';

const app = new Hono().basePath('/api');

app.use(cors());

app.get('/users', (c) => {
  const page = c.req.query('page') || 1;

  if (isNaN(+page) || +page < 1) {
    return c.json({ error: 'Invalid page number' }, 400);
  }

  const usersPerPage = 10;
  const totalUsers = 100;
  const totalPages = Math.ceil(totalUsers / usersPerPage);

  const users = faker.helpers.multiple(
    () => {
      return {
        userId: faker.string.uuid(),
        username: faker.internet.userName(),
        email: faker.internet.email(),
        avatar: faker.image.avatar(),
        password: faker.internet.password(),
        birthdate: faker.date.birthdate(),
        registeredAt: faker.date.past(),
      };
    },
    {
      count: usersPerPage,
    }
  );

  return c.json({
    users,
    page,
    totalPages
  });
});

export default app;
