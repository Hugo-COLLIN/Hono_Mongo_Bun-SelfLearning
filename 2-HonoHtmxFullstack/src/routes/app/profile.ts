import { Hono } from 'hono';

const app = new Hono();

app.get('/', (c) => {
  return c.text('Hello Profile Page');
});

app.post('/profile', (c) => {
  return c.text('Thanks POST');
});

export default app;
