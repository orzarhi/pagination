import { Hono } from 'hono';
import { faker } from '@faker-js/faker';
import { cors } from 'hono/cors';

const app = new Hono().basePath('/api');

app.use(cors());

app.get('/users', (c) => {
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
      count: 5,
    }
  );

  return c.json(users);
});

export default app;
