import { Hono } from 'hono';
import app from './app/index';

const hono = new Hono();

hono.get('/', (c) => {
  return c.text('Hello Homepage : Landing Page');
});

hono.route('/app', app)

export default hono;
