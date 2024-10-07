import { Hono } from 'hono';
import login from './login';

const hono = new Hono();

hono.get('/', (c) => {
  return c.text('Hello Auth Page');
});

hono.route('/login', login)

export default hono;
