import { Hono } from 'hono';

const hono = new Hono();

hono.get('/', (c) => {
  return c.text('Hello Login Page');
});

export default hono;
