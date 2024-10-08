import { Hono } from 'hono';

const hono = new Hono();

hono.get('/', (c) => {
  return c.text('Hello Login Page');
});

hono.post('/', (c) => {
  return c.redirect("/app")
});

export default hono;
